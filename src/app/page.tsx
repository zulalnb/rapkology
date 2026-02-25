import { Metadata } from "next";
import Hero from "@/components/hero";
import LiveStream from "@/components/live-stream";
import Trends from "@/components/trends";
import Favorites from "@/components/favorites";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};

export default function Home() {
	return (
		<main>
			<Hero />
			<LiveStream />
			<Trends />
			<Favorites />
		</main>
	);
}
