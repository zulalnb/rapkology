import { TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import TrendCard from "./trend-card";

const trends = [
	{
		id: 1,
		author: "Jonathan Stewart",
		title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
		avatar: "/jonathan-stewart.png",
	},
	{
		id: 2,
		author: "Steve Rogerson",
		title: "Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
		avatar: "/steve-rogerson.png",
	},
	{
		id: 3,
		author: "İsmail Kor",
		title: "Ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus ...",
		avatar: "/ismail-kor.png",
	},
	{
		id: 4,
		author: "Jonathan Stewart",
		title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
		avatar: "/jonathan-stewart.png",
	},
	{
		id: 5,
		author: "Steve Rogerson",
		title: "Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
		avatar: "/steve-rogerson.png",
	},
	{
		id: 6,
		author: "İsmail Kor",
		title: "Ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus ...",
		avatar: "/ismail-kor.png",
	},
];

export default function Trends() {
	return (
		<section className="container mx-auto px-4 py-18">
			<h2 className="font-saira-cond mb-13 text-center text-[2.5rem] font-bold uppercase sm:mb-22.5 md:text-left md:text-6xl">
				Trendler <TrendingUp className="text-yellow inline-flex size-8 align-middle md:size-16" />
			</h2>
			<div className="grid grid-cols-1 gap-y-14 sm:gap-x-5.5 md:grid-cols-2 lg:grid-cols-3">
				{trends.map((item, index) => (
					<TrendCard
						key={item.id}
						avatar={item.avatar}
						number={index + 1}
						title={item.title}
						author={item.author}
					/>
				))}
			</div>
			<div className="mt-34 flex justify-center sm:mt-20">
				<Button
					size="lg"
					className="rounded-none bg-white font-bold [clip-path:polygon(95%_100%,100%_0,0_2%,5%_90%)]"
				>
					Tümünü Gör
				</Button>
			</div>
		</section>
	);
}
