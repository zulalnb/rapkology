import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import TrendCard from "@/components/trend-card";
import type { BlogPost } from "@/types/post";

type TrendingPostsAsideProps = {
	posts: BlogPost[];
	className?: string;
};

export function TrendingPostsAside({ posts, className }: TrendingPostsAsideProps) {
	if (posts.length === 0) return null;

	return (
		<aside className={cn(className)}>
			<h2 className="font-saira-cond mb-13 text-center text-[2.5rem] font-bold uppercase sm:mb-19 md:text-left md:text-6xl">
				Trendler <TrendingUp className="text-yellow inline-flex size-8 align-middle md:size-16" />
			</h2>

			<div className="space-y-12">
				{posts.map((post, index) => (
					<TrendCard
						key={post._id}
						title={post.attributes.title}
						author={post.attributes.authors[0]}
						number={index + 1}
						avatar="/jonathan-stewart.png"
					/>
				))}
			</div>
		</aside>
	);
}
