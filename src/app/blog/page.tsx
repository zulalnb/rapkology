import { Suspense } from "react";
import { Metadata } from "next";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import Explore from "@/components/explore";
import { BlogHero, BlogHeroSkeleton } from "@/components/blog/blog-hero";
import { sharedOpenGraph } from "../shared-metadata";

const metaTitle = "Türkçe Rap Haberleri, Yeni Şarkılar ve Hip-Hop Gündemi";
const metaDescription =
	"Türkçe rap dünyasındaki en son haberleri, yeni çıkan şarkıları ve hip-hop kültürüne dair analizleri Rapkology blogunda keşfedin.";

export const metadata: Metadata = {
	title: metaTitle,
	description: metaDescription,
	alternates: {
		canonical: "/blog",
	},
	openGraph: {
		...sharedOpenGraph,
		title: metaTitle,
		description: metaDescription,
		url: "/blog",
	},
};

export default async function Blog() {
	return (
		<main>
			<Suspense fallback={<BlogHeroSkeleton />}>
				<BlogHero />
			</Suspense>
			<Explore className="relative overflow-hidden after:absolute after:top-0 after:left-0 after:-z-10 after:h-40 after:w-40 after:-rotate-15 after:bg-[url('/diamond.svg')] after:bg-contain after:bg-no-repeat after:content-[''] md:after:h-150 md:after:w-150" />
		</main>
	);
}
