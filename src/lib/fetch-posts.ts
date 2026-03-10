import { ApiResponse, BlogPost, PostFilters } from "@/types/post";
import { slugify } from "./utils";
interface GetPostsOptions {
	limit?: number;
	page?: number;
	cache?: RequestCache;
	filters?: {
		tag?: string;
	};
}

export async function getPosts({
	limit = 4,
	page = 1,
	cache = "force-cache",
	filters,
}: GetPostsOptions = {}): Promise<ApiResponse> {
	const res = await fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241", { cache });

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
