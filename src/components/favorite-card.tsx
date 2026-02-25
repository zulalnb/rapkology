/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Vector2 from "@/assets/vector-2.svg";
import Play from "@/assets/play.svg";
import { Badge } from "./ui/badge";

type Props = { rank: number; artist: string; album: string; cover: string; link: string };

export default function FavoriteCard({ rank, artist, album, cover, link }: Props) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			className="bg-black-900 relative block h-95 w-68 cursor-pointer overflow-hidden md:h-66"
		>
			<div className="pointer-events-none absolute inset-0 z-10">
				<img src="/vector-1.svg" alt="" aria-hidden className="absolute bottom-1.75 z-30 h-auto w-full" />
				<Vector2 className="absolute bottom-1 z-20 h-auto w-full" />
				<div className="absolute bottom-0 z-10 h-70 w-full bg-black [clip-path:polygon(0_93%,100%_88%,100%_100%,0%_100%)]" />
			</div>

			<div className="group relative z-20 flex h-full w-full flex-col items-center">
				<div className="mt-10 translate-0 -rotate-10 transition-transform duration-300 ease-out md:absolute md:mt-5 md:-translate-x-35 md:translate-y-4 md:group-hover:translate-0 md:group-hover:rotate-0">
					<Image
						src={cover}
						alt={`${artist} - ${album}`}
						width={185}
						height={185}
						className="size-40 rounded-md md:size-46.25"
					/>
					<span className="after:bg-black-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:inset-0 after:-z-10 after:scale-70 after:rounded-full after:content-['']">
						<Play className="relative z-10 size-12 text-white md:size-14" />
					</span>
				</div>
				<div className="mt-4 flex flex-col items-center transition-opacity group-hover:opacity-0 md:my-auto md:w-46.25 md:self-end">
					<Badge variant="secondary" className="bg-black-800 px-2.5 py-1.25 text-white">
						Top 10 <span className="font-bold">({rank}. Sıra)</span>
					</Badge>
					<h3 className="mt-2.5 text-center text-xl wrap-break-word uppercase">
						{artist}
						<br />
						<span className="font-bold">{album}</span>
					</h3>
				</div>
			</div>
		</a>
	);
}
