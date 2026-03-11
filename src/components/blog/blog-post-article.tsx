import Image from "next/image";
import { EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/post";

type BlogPostArticleProps = {
	post: BlogPost;
	className?: string;
};

export function BlogPostArticle({ post, className }: BlogPostArticleProps) {
	return (
		<article className={cn(className)}>
			<div className="flex items-center gap-2.5">
				<EyeIcon />
				12.094
			</div>

			<h1 className="font-saira-cond mt-7.5 text-[2.5rem] leading-none font-bold uppercase md:text-6xl">
				{post.attributes.title}
			</h1>

			<p className="font-saira-cond mt-7.5 text-2xl font-bold whitespace-pre-line uppercase">
				{post.attributes.desc}
			</p>

			<div className="relative mt-7.5 aspect-video w-full">
				<Image
					src={post.attributes.img}
					alt={post.attributes.title}
					fill
					sizes="(min-width: 768px) 66vw, 100vw"
					className="object-cover"
				/>
			</div>

			<p className="mt-7.5 text-sm md:text-base">{post.attributes.content}</p>

			<div className="mt-7.5 flex flex-wrap gap-2.5">
				{post.attributes.tags.map((tag) => (
					<Badge
						key={tag}
						variant="secondary"
						className="bg-black-800 rounded-none p-2.5 text-base font-normal"
					>
						{tag}
					</Badge>
				))}
			</div>

			<div className="mt-7.5 flex gap-7.5">
				<div className="flex items-center gap-2.5">
					<HeartIcon />
					<span>
						<span className="font-bold">14 Kişi</span> Beğendi
					</span>
				</div>

				<div className="flex items-center gap-2.5 font-bold">
					<MessageCircleIcon /> 3
				</div>
			</div>
		</article>
	);
}
