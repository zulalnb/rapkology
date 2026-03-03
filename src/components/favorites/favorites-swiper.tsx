"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Scrollbar } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { FavoriteCard } from "./favorite-card";
import { Favorite } from "@/types/favorite";

export function FavoritesSwiper({ favorites }: { favorites: Favorite[] }) {
	const swiperRef = useRef<SwiperType | null>(null);

	useEffect(() => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				swiperRef.current?.update();
			});
		});
	}, []);

	return (
		<Swiper
			onSwiper={(s) => (swiperRef.current = s)}
			className="favorites-swiper"
			modules={[Autoplay, Scrollbar, A11y]}
			scrollbar={{ draggable: true }}
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
					slidesOffsetBefore: 40,
					slidesOffsetAfter: 40,
				},
				768: {
					slidesOffsetBefore: 0,
					slidesOffsetAfter: 32,
				},
			}}
		>
			{favorites.map((fav, index) => (
				<SwiperSlide key={`${fav.id}-${index}`} className="mr-10 w-fit! md:mr-8">
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
	);
}
