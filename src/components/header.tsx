"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";

const items = [
	{ href: "/haberler", title: "Haberler" },
	{ href: "/etkinlikler", title: "Etkinlikler" },
	{ href: "/muzikler", title: "Müzikler" },
	{ href: "/videolar", title: "Videolar" },
	{ href: "/iletisim", title: "İletişim" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const isMobile = useIsMobile(1024);

	useEffect(() => {
		document.documentElement.classList.toggle("overflow-hidden", open && isMobile);
		return () => document.documentElement.classList.remove("overflow-hidden");
	}, [open, isMobile]);

	return (
		<header
			className={cn(
				"fixed top-0 z-50 w-full overflow-hidden after:absolute after:top-0 after:right-0 after:-z-10 after:h-[300vmax] after:w-[300vmax] after:translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[#121212]/90 after:transition-all after:duration-400 after:ease-in-out after:content-[''] lg:h-auto lg:after:bg-transparent",
				open
					? "after:scale-100"
					: "pointer-events-none after:pointer-events-none after:scale-0 after:delay-800",
			)}
		>
			<div className="pointer-events-auto relative z-10 h-20 bg-[#121212]/10 backdrop-blur-xl">
				<div className="container mx-auto px-4 md:px-1">
					<div className="flex h-20 items-center justify-between">
						<div className="flex lg:gap-14 xl:gap-20">
							<Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
								<Image
									src="/logo.svg"
									alt="Logo"
									width={235}
									height={60}
									className="h-auto w-45 lg:w-58"
									priority
								/>
							</Link>

							<NavigationMenu className="hidden lg:flex">
								<NavigationMenuList>
									{items.map((item) => (
										<NavigationMenuItem key={item.title}>
											<NavigationMenuLink
												asChild
												className={cn(
													navigationMenuTriggerStyle(),
													"hover:text-yellow bg-transparent uppercase hover:bg-transparent",
													pathname === item.href && "text-yellow",
												)}
											>
												<Link href={item.href}>{item.title}</Link>
											</NavigationMenuLink>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>
						</div>

						<div className="hidden gap-2 lg:flex">
							<Button size="icon-lg" variant="ghost" className="hover:bg-transparent">
								<SearchIcon className="stroke-3" />
							</Button>
							<Button className="rounded-none bg-white font-bold uppercase" size="lg">
								Giriş Yap
							</Button>
						</div>

						<div className="flex gap-1 lg:hidden">
							<Button size="icon-lg" variant="ghost" className="hover:bg-transparent">
								<SearchIcon className="stroke-3" />
							</Button>

							{/* Hamburger Menu */}
							<Button
								size="icon"
								variant="ghost"
								onClick={() => setOpen(!open)}
								className="hover:bg-transparent"
							>
								<span className="relative flex h-full w-7.5 flex-col items-end justify-center">
									<span
										className={cn(
											"bg-yellow absolute block h-0.75 w-5.5 -translate-y-[5.5px] transition-transform duration-200",
											open && "w-7.5 translate-y-0 rotate-45",
										)}
									></span>
									<span
										className={cn(
											"bg-yellow absolute block h-0.75 w-7.5 translate-y-[5.5px] transition-transform delay-100 duration-200",
											open && "translate-y-0 -rotate-45",
										)}
									></span>
								</span>
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={cn(
					"pointer-events-auto relative z-10 mt-10 flex h-[calc(100dvh-80px)] flex-col items-center transition-opacity duration-300 lg:hidden",
					open ? "opacity-100" : "pointer-events-none opacity-0 delay-600",
				)}
			>
				<NavigationMenu className="flex-0">
					<NavigationMenuList className="flex-col gap-2">
						{items.map((item, index) => (
							<NavigationMenuItem
								key={item.title}
								className={cn(
									"transition-[opacity,translate] duration-300 will-change-transform",
									open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
								)}
								style={{
									transitionDelay: open ? `${(index + 2) * 100}ms` : `${(items.length - index + 2) * 100}ms`,
								}}
							>
								<NavigationMenuLink
									asChild
									className={cn(
										"text-2xl font-bold uppercase",
										pathname === item.href ? "text-yellow" : "text-white",
									)}
									onClick={() => setOpen(false)}
								>
									<Link href={item.href}>{item.title}</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				<Button
					className={cn(
						"mt-2 rounded-none bg-white font-bold uppercase transition-[opacity,translate] duration-300 will-change-transform",
						open ? "translate-y-0 opacity-100 delay-700" : "-translate-y-4 opacity-0 delay-0",
					)}
					size="lg"
				>
					Giriş Yap
				</Button>
			</div>
		</header>
	);
}
