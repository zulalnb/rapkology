"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Newsletter from "./newsletter";
import { Button } from "./ui/button";
import {
	IconBrandDiscordFilled,
	IconBrandFacebookFilled,
	IconBrandSpotifyFilled,
	IconBrandTwitterFilled,
	IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const items = [
	{ href: "/haberler", title: "Haberler" },
	{ href: "/etkinlikler", title: "Etkinlikler" },
	{ href: "/muzikler", title: "Müzikler" },
	{ href: "/videolar", title: "Videolar" },
	{ href: "/iletisim", title: "İletişim" },
];

const socialLinks = [
	{
		href: "https://twitter.com/rapkology",
		icon: IconBrandTwitterFilled,
	},
	{
		href: "https://facebook.com/rapkology",
		icon: IconBrandFacebookFilled,
	},
	{
		href: "https://discord.gg/qfzBBjFHyZ",
		icon: IconBrandDiscordFilled,
	},
	{
		href: "https://open.spotify.com/user/316xh3tiyrm5m4m6spusdwfn7orm",
		icon: IconBrandSpotifyFilled,
	},
	{
		href: "https://www.youtube.com/@rapkology",
		icon: IconBrandYoutubeFilled,
	},
];

export function Footer() {
	const pathname = usePathname();

	return (
		<footer className="container mx-auto flex flex-col gap-y-12.5 px-4 py-9 md:flex-row md:items-end md:justify-between md:gap-y-0 md:py-16">
			<div>
				<Link href="/" className="mb-12 block">
					<Image src="/logo.svg" alt="Logo" width={235} height={60} className="h-auto w-45 lg:w-58" />
				</Link>
				<Newsletter />
			</div>
			<div className="space-y-7.5">
				<div className="flex gap-2">
					{socialLinks.map(({ href, icon: Icon }) => (
						<Button key={href} size="icon-sm" variant="ghost" className="text-yellow" asChild>
							<a href={href} target="_blank" rel="noopener noreferrer">
								<Icon className="size-6" />
							</a>
						</Button>
					))}
				</div>

				<NavigationMenu>
					<NavigationMenuList className="flex-wrap justify-start gap-x-15 md:gap-x-10 md:gap-y-6">
						{items.map((item) => (
							<NavigationMenuItem key={item.title}>
								<NavigationMenuLink
									asChild
									className={cn(
										navigationMenuTriggerStyle(),
										"hover:text-yellow bg-transparent px-0 uppercase hover:bg-transparent",
										pathname === item.href && "text-yellow",
									)}
								>
									<Link href={item.href}>{item.title}</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
				<div className="text-black-500 text-sm">© RAPKOLOGY All Rights Are Reserved 2022.</div>
			</div>
		</footer>
	);
}
