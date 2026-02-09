import Hero from "@/components/hero";
import LiveStream from "@/components/live-stream";
import Trends from "@/components/trends";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
	return (
		<main>
			<Hero />
			<LiveStream />
			<Trends />
		</main>
	);
}
