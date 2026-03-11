import { ApiResponse, BlogPost, PostFilters } from "@/types/post";
import { slugify } from "./utils";

const POSTS_URL = "https://dummyjson.com/c/a7c4-016a-47aa-8241";
interface GetPostsOptions {
	limit?: number;
	page?: number;
	cache?: RequestCache;
	filters?: {
		tag?: string;
		trends?: boolean;
	};
}

interface GetBlogPostPageDataOptions {
	cache?: RequestCache;
	trendingLimit?: number;
	moreLimit?: number;
}

type BlogPostPageData = {
	post: BlogPost | null;
	trendingPosts: BlogPost[];
	morePosts: BlogPost[];
};

export async function getPosts({
	limit = 4,
	page = 1,
	cache = "force-cache",
	filters,
}: GetPostsOptions = {}): Promise<ApiResponse> {
	const res = await fetch(POSTS_URL, { cache });

	if (!res.ok) {
		throw new Error("Postlar yüklenirken hata oluştu");
	}

	const all = (await res.json()) as BlogPost[];

	const resultFilters: PostFilters = {};
	let filtered = all;
	let tagTitle: string = "";

	if (filters?.tag) {
		const slug = filters.tag.toLowerCase();

		filtered = filtered.filter((post) => {
			const match = post.attributes.tags?.find((tag) => slugify(tag) === slug);

			if (match && !tagTitle) {
				tagTitle = match;
			}

			return Boolean(match);
		});

		resultFilters.tag = {
			slug: filters.tag,
			name: tagTitle,
		};
	}

	if (filters?.trends !== undefined) {
		filtered = filtered.filter((post) => post.attributes.trends === filters.trends);
	}

	const total = filtered.length;
	const totalPages = Math.max(1, Math.ceil(total / limit));

	const safePage = Math.max(1, Math.min(page, totalPages));

	const start = (safePage - 1) * limit;
	const data = filtered.slice(start, start + limit);

	return {
		data,
		filters: resultFilters,
		pagination: {
			page: safePage,
			limit,
			total,
			totalPages,
			hasPrev: safePage > 1,
			hasNext: safePage < totalPages,
		},
	};
}

export async function getPostBySlug(
	slug: string,
	{ cache = "force-cache" }: { cache?: RequestCache } = {},
): Promise<BlogPost | null> {
	const res = await fetch(POSTS_URL, { cache });

	if (!res.ok) {
		throw new Error("Postlar yüklenirken hata oluştu");
	}

	const all = (await res.json()) as BlogPost[];

	return all.find((post) => post.attributes.slug === slug) ?? null;
}

export async function getPostPageData(
	slug: string,
	{ cache = "force-cache", trendingLimit = 4, moreLimit = 3 }: GetBlogPostPageDataOptions = {},
): Promise<BlogPostPageData> {
	const all = await getPosts({ limit: 10, cache });

	const post = all.data.find((item) => item.attributes.slug === slug) ?? null;

	if (!post) {
		return {
			post: null,
			trendingPosts: [],
			morePosts: [],
		};
	}

	const remainingPosts = all.data.filter((item) => item.attributes.slug !== slug);

	const trendingPosts = remainingPosts.slice(0, trendingLimit);
	const morePosts = remainingPosts.slice(trendingLimit, trendingLimit + moreLimit);

	return {
		post,
		trendingPosts,
		morePosts,
	};
}
