/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroItem = {
	image: {
		path: string;
		alt: string;
		loc: string;
		className: string;
		parent: string;
	};
	title: string;
	description: string;
	color: string;
	sizes: string;
};

export default function HeroItem({ item, priority }: { item: HeroItem; priority: boolean }) {
	return (
		<div className="relative h-[70svh] after:pointer-events-none after:absolute after:inset-0 after:bg-[url('/metal-texture-with-dust-scratches.avif')] after:bg-top after:bg-no-repeat after:opacity-10 after:mix-blend-overlay after:content-[''] lg:aspect-video lg:h-auto">
			<div className={cn("absolute inset-0", item.image.loc, item.image.parent)}>
				<Image
					src={item.image.path}
					alt={item.image.alt}
					fill
					sizes={item.sizes}
					priority={priority}
					className={item.image.className}
				/>
			</div>
			<div className="absolute -bottom-12 left-0 z-10 w-full leading-none md:-bottom-66 lg:-bottom-48">
				<img
					src="/torn-paper-divider.svg"
					alt=""
					aria-hidden="true"
					className="relative left-1/2 block h-auto w-[140%] max-w-none -translate-x-1/2 md:w-[160%] lg:w-450"
				/>
			</div>
		</div>
	);
}
