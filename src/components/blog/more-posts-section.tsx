import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/post";
import { CompactPostCard } from "@/components/blog/cards/compact-post-card";
import { Button } from "@/components/ui/button";

type MorePostsSectionProps = {
	posts: BlogPost[];
	className?: string;
};

export function MorePostsSection({ posts, className }: MorePostsSectionProps) {
	if (posts.length === 0) return null;

	return (
		<section className={cn(className)}>
			<h2 className="mb-12.5 text-[2.5rem] font-bold uppercase sm:mb-15 md:text-6xl">Daha Fazla İçerik</h2>

			<div className="space-y-10">
				{posts.map((post) => (
					<Link key={post._id} href={`/blog/${post.attributes.slug}`} className="block">
						<CompactPostCard
							key={post._id}
							title={post.attributes.title}
							image={post.attributes.img}
							sizes="178px"
						/>
					</Link>
				))}
			</div>
			<div className="mt-34 flex justify-center sm:mt-20">
				<Button
					size="lg"
					className="rounded-none bg-white font-bold [clip-path:polygon(95%_100%,100%_0,0_2%,5%_90%)]"
					asChild
				>
					<Link href="/blog">Tümünü Gör</Link>
				</Button>
			</div>
		</section>
	);
}
