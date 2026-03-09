import { ApiResponse, BlogPost } from "@/types/post";

interface GetPostsOptions {
	limit?: number;
	page?: number;
	cache?: RequestCache;
}

export async function getPosts({
	limit = 4,
	page = 1,
	cache = "force-cache",
}: GetPostsOptions = {}): Promise<ApiResponse> {
	const res = await fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241", { cache });

	if (!res.ok) {
		throw new Error("Postlar yüklenirken hata oluştu");
	}

	const all = (await res.json()) as BlogPost[];

	const total = all.length;
	const totalPages = Math.max(1, Math.ceil(total / limit));

	const safePage = Math.max(1, Math.min(page, totalPages));

	const start = (safePage - 1) * limit;
	const data = all.slice(start, start + limit);

	return {
		data,
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
