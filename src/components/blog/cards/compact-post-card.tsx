import { ElementType } from "react";
import Image from "next/image";
import { truncateText } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type CompactPostCardProps = {
	title: string;
	image: string;
	as?: ElementType;
	sizes: string;
};

export function CompactPostCard({ title, image, as: TitleTag = "p", sizes }: CompactPostCardProps) {
	return (
		<article className="flex items-center gap-5">
			<div className="relative aspect-video w-full basis-44.5">
				<Image src={image} alt={title} className="object-cover" fill sizes={sizes} />
			</div>
			<TitleTag className="font-saira-cond flex-1 text-xl leading-none font-bold uppercase">
				{truncateText(title, 90, "...")}
			</TitleTag>
		</article>
	);
}

export function CompactPostCardSkeleton() {
	return (
		<div className="flex items-center gap-5">
			<div className="basis-44.5">
				<Skeleton className="aspect-video w-full" />
			</div>
			<div className="flex-1 space-y-0.5">
				<Skeleton className="h-5 w-full md:h-6" />
				<Skeleton className="h-5 w-full md:h-6" />
			</div>
		</div>
	);
}
