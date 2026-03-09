import { Suspense } from "react";
import { SpotifyLogoWordmark, YoutubeLogoWordmark } from "@/assets";

import { FavoritesSwiperSection } from "./favorites-swiper-section";
import { FavoritesSkeleton } from "./favorites-swiper";

export default function Favorites() {
	return (
		<section className="flex flex-col md:flex-row md:items-end md:gap-3 md:pb-8">
			<div className="md:shrink-0 md:basis-1/2 md:pb-16">
				<div className="flex items-center justify-center gap-6.25 bg-white py-7 [clip-path:polygon(90%_80%,100%_0%,0%_0%,0%_100%)] md:w-4/5 md:gap-9 md:px-16 md:py-8">
					<YoutubeLogoWordmark className="h-auto w-28.25 text-black transition hover:text-[#F00] md:w-40.5" />
					<SpotifyLogoWordmark className="h-auto w-27.75 text-black transition hover:text-[#1ED760] md:w-40" />
				</div>
				<div className="container mx-auto">
					<h2 className="font-saira-cond mt-9 text-center text-[2.5rem] font-bold uppercase sm:ml-[calc((100dvw-var(--container-w))/2)] sm:pl-4 md:mt-18 md:text-left md:text-6xl">
						Ayın <br /> Favorileri
					</h2>
				</div>
			</div>
			<div className="mt-13 md:mt-0 md:min-w-0 md:basis-1/2">
				<Suspense fallback={<FavoritesSkeleton />}>
					<FavoritesSwiperSection />
				</Suspense>
			</div>
		</section>
	);
}
