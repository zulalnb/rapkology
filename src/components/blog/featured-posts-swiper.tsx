"use client";
import { useState } from "react";
import Link from "next/link";
import { type Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/types/post";
import FeaturedPostCard from "./cards/featured-post-card";

type Props = {
	posts: BlogPost[];
};

export function FeaturedPostsSwiper({ posts }: Props) {
	const [swiper, setSwiper] = useState<SwiperType | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="@container relative w-full">
			<Swiper
				modules={[Pagination, A11y, Autoplay, EffectCoverflow]}
				effect={"coverflow"}
				onSwiper={setSwiper}
				onSlideChange={(s: SwiperType) => setActiveIndex(s.realIndex)}
				loop
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				speed={1000}
				slidesPerView={1}
				className="w-full"
				slidesOffsetBefore={16}
				slidesOffsetAfter={16}
				spaceBetween={32}
				breakpoints={{
					0: {
						slidesOffsetBefore: 16,
						slidesOffsetAfter: 16,
					},
					768: {
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
					},
				}}
			>
				{posts.map((post, index) => (
					<SwiperSlide key={post._id} className="">
						<Link href={`/blog/${post.attributes.slug}`} className="block w-full">
							<FeaturedPostCard
								title={post.attributes.title}
								description={post.attributes.desc}
								isVideo={post.attributes.category.some((cat) => cat.toLowerCase().includes("video"))}
								image={post.attributes.img}
								sizes="(min-width: 768px) 58vw, 100vw"
								priority={index < 1}
							/>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Custom Pagination */}
			<div className="mt-6 flex justify-center md:absolute md:top-[calc((9/16*100cqw)+1.5rem)] md:right-[6%] md:z-50 md:mt-0 md:block">
				<div className="flex items-center gap-2">
					{posts.map((_, index) => {
						const isActive = index === activeIndex;

						return (
							<button
								key={index}
								type="button"
								aria-label={`Go to slide ${index + 1}`}
								onClick={() => swiper?.slideToLoop(index)}
								className={cn("rounded-full", isActive ? "size-4 bg-black" : "size-2 bg-[#8E870D]")}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
