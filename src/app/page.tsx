import { Metadata } from "next";
import Hero from "@/components/hero";
import LiveStream from "@/components/live-stream";
import Trends from "@/components/trends";
import Favorites from "@/components/favorites";
import Explore from "@/components/explore";
import { sharedOpenGraph } from "./shared-metadata";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "swiper/css/navigation";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
	openGraph: {
		...sharedOpenGraph,
		url: "/",
	},
};

export default function Home() {
	return (
		<main>
			<Hero />
			<LiveStream />
			<Trends />
			<Favorites />
			<Explore />
		</main>
	);
}
