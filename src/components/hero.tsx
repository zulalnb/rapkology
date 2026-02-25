"use client";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import HeroItem from "./hero-item";
import { hero } from "@/data/hero";

export default function Hero() {
	const slides = useMemo(() => hero, []);
	const [active, setActive] = useState(0);

	return (
		<section className="relative h-svh w-full md:h-auto">
			<h1 className="sr-only">Türkçe rap ve dünya müzik haberlerini takip et</h1>
			<div
				className={cn(
					"relative top-0 z-20 mx-auto mt-27 w-70 max-w-90 px-2 text-center md:absolute md:top-40 md:right-16 md:mt-auto md:h-auto md:w-115 md:max-w-none md:items-start md:px-0 md:text-left lg:right-35",
					slides[active]?.color,
				)}
			>
				<h2 className="font-saira-cond mb-6 text-3xl font-bold tracking-[-2%] uppercase lg:text-6xl">
					{slides[active]?.title}
				</h2>
				<p className="text-sm md:text-base">{slides[active]?.description}</p>
				<div className="mt-4 drop-shadow-[5px_5px_0_#000000]">
					<Button
						size="lg"
						className="bg-yellow rounded-none font-bold [clip-path:polygon(95%_100%,100%_0,0_2%,5%_90%)]"
					>
						Devamını Oku
					</Button>
				</div>
				<div className="hero-pagination pointer-events-auto mt-10 flex items-center justify-center gap-2 md:justify-start" />
			</div>
			<div className="absolute bottom-0 w-full overflow-hidden md:static md:h-full">
				<Swiper
					modules={[Autoplay, Pagination, Navigation, A11y, EffectFade]}
					navigation={{
						nextEl: ".hero-next",
						prevEl: ".hero-prev",
					}}
					effect="fade"
					fadeEffect={{ crossFade: true }}
					slidesPerView={1}
					loop
					speed={1000}
					autoplay={{ delay: 9000, disableOnInteraction: false }}
					pagination={{
						el: ".hero-pagination",
						clickable: true,
						renderBullet: (_, className) => {
							return `<span class="${className} hero-bullet"></span>`;
						},
					}}
					onSlideChange={(sw) => setActive(sw.realIndex)}
					className="hero-swiper h-full"
				>
					<Button
						size="icon-lg"
						variant="ghost"
						className="hero-prev absolute top-1/2 left-10 z-30 hidden -translate-y-1/2 hover:bg-transparent md:flex"
					>
						<ArrowLeftIcon className="size-8 text-white" />
					</Button>

					<Button
						size="icon-lg"
						variant="ghost"
						className="hero-next absolute top-1/2 right-10 z-30 hidden -translate-y-1/2 hover:bg-transparent md:flex"
					>
						<ArrowRightIcon className="size-8 text-white" />
					</Button>

					{hero.map((item, index) => (
						<SwiperSlide key={index} className="md:h-full!">
							<HeroItem item={item} priority={index < 1} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
