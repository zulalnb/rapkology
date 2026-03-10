import Image from "next/image";
import { PlayOutlined } from "@/assets";
import { truncateText } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
	title: string;
	description: string;
	image: string;
	sizes: string;
	priority: boolean;
	isVideo?: boolean;
};

export default function FeaturedPostCard({ title, description, image, sizes, isVideo, priority }: Props) {
	return (
		<article>
			<div className="relative aspect-video w-full overflow-hidden">
				<Image src={image} alt={title} className="object-cover" fill sizes={sizes} priority={priority} />
				{/* Overlay */}
				<div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black to-black/0" />
				<h3 className="font-saira-cond absolute bottom-6/100 left-6/100 w-9/12 px-4 text-2xl leading-none font-bold text-white uppercase md:text-[2.5rem]">
					{truncateText(title, 80, "...")}
				</h3>
				{isVideo && (
					<div className="absolute right-6/100 bottom-6/100 rounded-full bg-[#CBCBCB]/8 p-1">
						<PlayOutlined className="text-yellow size-8 md:size-16" />
					</div>
				)}
			</div>
			<div className="mt-6 flex w-full flex-col items-center gap-6 md:ml-[6%] md:w-9/12 md:flex-row md:items-start md:justify-between md:gap-9">
				<p className="font-saira-cond text-xl font-bold text-black uppercase md:text-2xl">
					{truncateText(description, 140, "...")}
				</p>
			</div>
		</article>
	);
}

export function FeaturedPostCardSkeleton() {
	return (
		<div className="flex flex-col gap-6 md:gap-9">
			<Skeleton className="aspect-video w-full" />
			<div className="space-y-0.5">
				<Skeleton className="h-4 w-full md:h-5" />
				<Skeleton className="h-4 w-full md:h-5" />
				<Skeleton className="h-4 w-full md:h-5" />
			</div>
		</div>
	);
}
