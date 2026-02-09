import React from "react";
import { ArrowRight } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = { number: number; avatar: string; author: string; title: string };

export default function TrendCard({ number, avatar, author, title }: Props) {
	return (
		<div className="flex gap-10 md:gap-15">
			<span className="font-saira-cond text-black-900 w-[3ch] shrink-0 text-6xl leading-none font-bold tabular-nums">
				{String(number).padStart(2, "0")}
			</span>
			<div className="space-y-5">
				<div className="flex items-center gap-5">
					<Avatar className="rounded-[0.625rem]">
						<AvatarImage src={avatar} />
						<AvatarFallback>
							{author
								.split(" ")
								.map((word) => word[0])
								.join("")}
						</AvatarFallback>
					</Avatar>
					<span className="text-sm font-bold md:text-base md:font-normal">{author}</span>
				</div>
				<h3 className="font-saira-cond text-xl leading-none font-bold uppercase md:text-2xl">{title}</h3>
				<Separator className="bg-black-700" />
				<Button variant="link" className="group px-0!">
					Daha Fazla Oku <ArrowRight className="text-yellow hidden group-hover:block" />
				</Button>
			</div>
		</div>
	);
}
