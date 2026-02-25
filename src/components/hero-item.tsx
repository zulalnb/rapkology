/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroItem = {
	image: {
		path: string;
		alt: string;
		loc: string;
		className: string;
		sizes: string;
	};
	title: string;
	description: string;
	color: string;
};

export default function HeroItem({ item, priority }: { item: HeroItem; priority: boolean }) {
	return (
		<div className="relative h-[70svh] after:mix-blend-overlay after:content-[''] lg:aspect-video lg:h-auto">
			<img
				src="/metal-texture-with-dust-scratches.avif"
				alt=""
				aria-hidden="true"
				loading="lazy"
				decoding="async"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-10 mix-blend-overlay"
			/>
			<div className={cn("absolute inset-0", item.image.loc)}>
				<Image
					src={item.image.path}
					alt={item.image.alt}
					fill
					sizes={item.image.sizes}
					loading={priority ? "eager" : "lazy"}
					fetchPriority={priority ? "high" : "low"}
					priority={priority}
					className={item.image.className}
				/>
			</div>
			<div className="absolute -bottom-12 left-0 z-10 w-full leading-none md:-bottom-66 lg:-bottom-48">
				<img
					src="/torn-paper-divider.svg"
					alt=""
					aria-hidden="true"
					loading="lazy"
					decoding="async"
					className="relative left-1/2 block h-auto w-[140%] max-w-none -translate-x-1/2 md:w-[160%] lg:w-450"
				/>
			</div>
		</div>
	);
}
