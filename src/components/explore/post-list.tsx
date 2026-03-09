import { BlogPost } from "@/types/post";
import { cn } from "@/lib/utils";
import type { ExploreView } from "./explore-view-provider";
import { PostCard } from "./post-card";

type PostListProps = {
	posts: BlogPost[];
	sizes: string;
	view?: ExploreView;
};

export function PostList({ posts, sizes, view = "list" }: PostListProps) {
	return (
		<div
			className={cn(
				"grid gap-x-5 gap-y-15 lg:gap-x-10 lg:gap-y-20",
				view === "list" ? "grid-cols-1 md:grid-cols-12" : "grid-cols-12",
			)}
		>
			{posts.map((post) => (
				<div
					key={post._id}
					className={view === "list" ? "md:col-span-6" : "col-span-6 md:col-span-4 lg:col-span-3"}
				>
					<PostCard key={post._id} post={post} sizes={sizes} view={view} />
				</div>
			))}
		</div>
	);
}
