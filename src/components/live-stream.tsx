/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ChevronDown, HeartIcon, StarIcon } from "lucide-react";

export default function LiveStream() {
	return (
		<section className="relative mt-0 w-full overflow-hidden bg-[url('/live-concert-crowd.png')] bg-size-[900px_auto] bg-center bg-no-repeat md:mt-15 md:bg-size-[1300px_auto] md:bg-bottom">
			<div className="flex -rotate-4 flex-col items-center gap-6 md:absolute md:top-4 md:left-1/2 md:-translate-x-1/2">
				<div className="flex h-38 items-center justify-center gap-2.5">
					<Image
						src="/twitch-logo-wordmark.png"
						alt="Twitch"
						width={158}
						height={98}
						loading="lazy"
						className="h-auto w-27 md:w-39.5"
					/>
					<Separator orientation="vertical" className="bg-black-700" />
					<div>
						<h2>
							<span className="font-saira-cond block text-5xl font-light uppercase md:text-[4.25rem]">
								Her Hafta
							</span>
							<span className="text-yellow font-saira-cond block text-5xl font-bold uppercase md:text-[4.25rem]">
								Canlıdayız!
							</span>
						</h2>
						<p className="text-xs font-bold md:text-base">Bizi Takip Edin!</p>
					</div>
				</div>
				<div className="border-black-900 flex items-center gap-2.5 rounded-xl border bg-[#151515] p-3.5">
					<Button className="font-helvetica bg-[#864CF6] font-bold text-white">
						<HeartIcon className="stroke-3" /> Takip Et
					</Button>
					<Button className="font-helvetica bg-[#222123] font-bold text-white">
						<StarIcon className="stroke-3" /> Abone Ol <ChevronDown className="stroke-3" />
					</Button>
				</div>
			</div>
			<div className="container mx-auto flex h-140 items-center justify-between">
				<Image
					src="/hip-hop-artist.png"
					alt="Hip-hop artist"
					width={420}
					height={438}
					loading="lazy"
					className="h-auto w-70 md:w-72 lg:w-[480px]"
				/>
				<Image
					src="/melis-aydin.png"
					alt="Melis Aydın"
					width={303}
					height={530}
					loading="lazy"
					className="h-auto w-55 md:w-44 lg:w-[303px]"
				/>
			</div>
			<div className="absolute -bottom-12 left-0 z-10 w-full leading-none md:-bottom-60 lg:-bottom-66">
				<img
					src="/torn-paper-divider.svg"
					alt=""
					aria-hidden="true"
					className="relative left-1/2 block h-auto w-[140%] max-w-none -translate-x-1/2 -scale-x-100 md:w-[160%] lg:w-450"
				/>
			</div>
		</section>
	);
}
