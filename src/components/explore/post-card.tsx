import Image from "next/image";
import type { BlogPost } from "@/types/post";
import { cn, truncateText } from "@/lib/utils";
import { ExploreView } from "./explore-view-provider";
import { Skeleton } from "../ui/skeleton";

type PostCardProps = {
	post: BlogPost;
	sizes: string;
	view?: ExploreView;
};

function formatDate(date: string) {
	return new Date(date).toLocaleDateString("tr-TR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

export function PostCard({ post, sizes, view = "list" }: PostCardProps) {
	const author = post.attributes.authors[0];

	return (
		<article className="h-full">
			<div className={cn("flex h-full flex-col gap-5 p-0", view === "list" && "md:flex-row")}>
				<div className={cn("flex flex-col", view === "list" && "md:basis-2xs")}>
					<div className="relative aspect-video w-full overflow-hidden">
						<Image
							src={post.attributes.img}
							alt={post.attributes.title}
							fill
							className="object-cover"
							sizes={sizes}
						/>
					</div>

					<time
						dateTime={post.createdAt}
						className="text-black-700 mt-5 block text-sm md:mt-7.5 md:text-base"
					>
						{formatDate(post.createdAt)}
					</time>
				</div>

				<div className={cn("flex flex-col", view === "list" && "flex-1")}>
					<div className="mb-5 flex items-center gap-3 md:mb-6">
						<div className="relative size-8 overflow-hidden rounded-lg">
							<Image src="/jonathan-stewart.png" alt={author} fill className="object-cover" sizes="32px" />
						</div>

						<p className="text-sm text-white md:text-base">{author}</p>
					</div>

					<h3 className="font-saira-cond mb-5 text-xl leading-none font-bold text-white uppercase md:mb-7.5 md:text-2xl">
						{truncateText(post.attributes.title, 88, "...")}
					</h3>

					<p
						className={cn(
							"border-t-black-700 border-t pt-5 text-sm text-white transition-opacity hover:opacity-85 md:pt-7.5 md:text-base",
						)}
					>
						Daha Fazla Oku
					</p>
				</div>
			</div>
		</article>
	);
}

export function PostCardSkeleton() {
	return (
		<div className="flex flex-col gap-5 md:flex-row">
			<div className="md:basis-2xs">
				<Skeleton className="aspect-video w-full" />
				<Skeleton className="mt-5 h-5 md:mt-7.5 md:h-6" />
			</div>
			<div className="flex-1">
				<div className="mb-5 flex items-center gap-3">
					<Skeleton className="size-8 shrink-0" />
					<Skeleton className="h-5 w-full md:h-6" />
				</div>
				<div className="w-full space-y-2">
					<Skeleton className="h-4 w-full md:h-5" />
					<Skeleton className="h-4 w-full md:h-5" />
				</div>
			</div>
		</div>
	);
}
