"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import HeroItem from "./hero-item";

const data = [
	{
		image: {
			path: "/hip-hop-singer-performing-during-concert.avif",
			alt: "Hip-hop singer performing during concert",
			loc: "md:-translate-x-50 lg:-translate-x-73 md:translate-y-20 lg:translate-y-12",
			className: "object-cover w-[966px] md:w-[1474px] h-auto",
		},
		title: "Türkçe Rap ve Dünya Müzik Haberlerini Takip Et",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
		color: "md:text-white",
	},
	{
		image: {
			path: "/hip-hop-artist-portrait-with-sunglasses.avif",
			alt: "Hip-hop Artist Portrait With Sunglasses",
			loc: "lg:-translate-x-1 lg:-translate-y-10",
			className: "object-cover object-[25%_50%] lg:object-contain w-[966px] md:w-[1440px] h-auto",
		},
		title: "Dünya Rap Trendlerini Konuşuyoruz",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
		color: "md:text-black",
	},
];

export default function Hero() {
	const [active, setActive] = useState(0);

	return (
		<section className="relative h-svh w-full">
			<h1 className="sr-only">Türkçe rap ve dünya müzik haberlerini takip et</h1>
			<div
				className={cn(
					"relative top-0 z-20 mx-auto mt-27 w-70 max-w-90 px-2 text-center md:absolute md:top-40 md:right-16 md:mt-auto md:h-auto md:w-115 md:max-w-none md:items-start md:px-0 md:text-left lg:right-35",
					data[active]?.color,
				)}
			>
				<h2 className="font-saira-cond mb-6 text-3xl font-bold tracking-[-2%] uppercase lg:text-6xl">
					{data[active]?.title}
				</h2>
				<p className="text-sm md:text-base">{data[active]?.description}</p>
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
				speed={700}
				autoplay={{ delay: 4500, disableOnInteraction: false }}
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
				<div className="absolute bottom-0 w-full overflow-hidden md:static md:h-svh">
					{data.map((item, index) => (
						<SwiperSlide key={index}>
							<HeroItem priority={index < 1} item={item} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</section>
	);
}
