import { getPosts } from "@/lib/fetch-posts";
import { PostsFeed } from "./posts-feed";

export async function PostsSection() {
	const initialPage = await getPosts({
		page: 1,
		limit: 4,
		fetchOptions: { next: { revalidate: 3600 } },
	});

	return <PostsFeed initialPage={initialPage} limit={4} />;
}
