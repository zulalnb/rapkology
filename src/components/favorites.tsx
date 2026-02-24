"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Scrollbar } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import Youtube from "@/assets/youtube-logo-wordmark.svg";
import Spotify from "@/assets/spotify-logo.svg";
import FavoriteCard from "./favorite-card";

import "swiper/css/scrollbar";
import { favorites } from "@/data/favorites";

export default function Favorites() {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const swiperRef = useRef<SwiperType | null>(null);

	useEffect(() => {
		const el = rootRef.current;
		if (!el) return;

		const prefersReducedMotion =
			typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

		if (prefersReducedMotion) return;

		const io = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				const swiper = swiperRef.current;
				if (!swiper?.autoplay) return;

				if (entry.isIntersecting) {
					swiper.autoplay.start();
				} else {
					swiper.autoplay.stop();
				}
			},
			{
				threshold: 0.8,
			},
		);

		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<section ref={rootRef} className="flex flex-col md:flex-row md:items-end md:gap-3 md:pb-8">
			<div className="md:shrink-0 md:basis-1/2 md:pb-16">
				<div className="flex items-center justify-center gap-6.25 bg-white py-7 [clip-path:polygon(90%_80%,100%_0%,0%_0%,0%_100%)] md:w-4/5 md:gap-9 md:px-16 md:py-8">
					<Youtube className="h-auto w-28.25 text-black transition hover:text-[#F00] md:w-40.5" />
					<Spotify className="h-auto w-27.75 text-black transition hover:text-[#1ED760] md:w-40" />
				</div>
				<h2 className="font-saira-cond mt-9 text-center text-[2.5rem] font-bold uppercase md:mt-18 md:ml-24 md:text-left md:text-6xl">
					Ayın <br /> Favorileri
				</h2>
			</div>
			<div className="mt-13 md:mt-0 md:min-w-0 md:basis-1/2">
				<Swiper
					className="favorites-swiper"
					modules={[Autoplay, Scrollbar, A11y]}
					onSwiper={(s) => {
						swiperRef.current = s;
						s.autoplay.stop();
					}}
					scrollbar={{ draggable: true }}
					spaceBetween={32}
					slidesPerView="auto"
					loop
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					style={
						{
							paddingBottom: "48px",
							"--swiper-scrollbar-bottom": "5px",
							"--swiper-scrollbar-bg-color": "#2A2A2A",
							"--swiper-scrollbar-drag-bg-color": "#F0E74D",
							"--swiper-scrollbar-sides-offset": "10%",
							"--swiper-scrollbar-size": "5px",
						} as React.CSSProperties
					}
					breakpoints={{
						0: {
							spaceBetween: 40,
							slidesOffsetBefore: 40,
							slidesOffsetAfter: 40,
						},
						768: {
							spaceBetween: 32,
							slidesOffsetBefore: 0,
							slidesOffsetAfter: 32,
						},
					}}
				>
					{favorites.map((fav, index) => (
						<SwiperSlide key={`${fav.id}-${index}`} className="w-fit!">
							<FavoriteCard
								artist={fav.artist}
								album={fav.album}
								cover={fav.cover}
								rank={fav.rank}
								link={fav.link}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
