"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiResponse } from "@/types/post";
import { useExploreView } from "./explore-view-provider";

import { PostList } from "./post-list";
import { LoadMoreButton } from "../load-more-button";

type PostsFeedProps = {
	initialPage: ApiResponse;
	limit: number;
};

async function fetchPostsPage(page: number, limit: number): Promise<ApiResponse> {
	const res = await fetch(`/api/blogs?page=${page}&limit=${limit}`);

	if (!res.ok) {
		throw new Error("Postlar yüklenirken hata oluştu");
	}

	return res.json();
}

export function PostsFeed({ initialPage, limit }: PostsFeedProps) {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery<ApiResponse>({
		queryKey: ["posts", limit],
		queryFn: ({ pageParam }) => fetchPostsPage(pageParam as number, limit),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.pagination.hasNext ? lastPage.pagination.page + 1 : undefined;
		},
		initialData: {
			pages: [initialPage],
			pageParams: [1],
		},
	});

	const { view } = useExploreView();

	const posts = data.pages.flatMap((page) => page.data);

	const imageSizes =
		view === "list"
			? "(min-width: 768px) 288px, 100vw"
			: "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw";

	return (
		<div className="mt-15 space-y-4 lg:mt-24">
			<PostList posts={posts} sizes={imageSizes} view={view} />
			<LoadMoreButton onClick={fetchNextPage} isLoading={isFetchingNextPage} hasNextPage={hasNextPage} />
		</div>
	);
}
