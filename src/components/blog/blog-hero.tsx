/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { getPosts } from "@/lib/fetch-posts";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { CompactPostCard, CompactPostCardSkeleton } from "./cards/compact-post-card";
import { FeaturedPostsSwiper } from "./featured-posts-swiper";
import { FeaturedPostCardSkeleton } from "./cards/featured-post-card";

export async function BlogHero() {
	const posts = await getPosts({
		page: 1,
		limit: 9,
		fetchOptions: { next: { revalidate: 3600 } },
	});

	return (
		<section className="overflow-hidden pt-20 text-black">
			<div className="bg-yellow relative pt-5 pb-40 md:pt-10">
				<img
					src="/metal-texture-with-dust-scratches.avif"
					alt=""
					aria-hidden="true"
					loading="lazy"
					decoding="async"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-20 mix-blend-multiply"
				/>
				<img
					src="/style.svg"
					alt=""
					aria-hidden="true"
					loading="lazy"
					decoding="async"
					className="pointer-events-none absolute -right-4 bottom-4 hidden -rotate-7 object-cover opacity-20 mix-blend-multiply md:block"
				/>
				<div className="container mx-auto px-4">
					<Breadcrumb>
						<BreadcrumbList className="text-current">
							<BreadcrumbItem>
								<BreadcrumbLink asChild className="uppercase">
									<Link href="/">Ana Sayfa</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage className="text-current uppercase">Blog</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<h1 className="font-saira-cond mt-4 text-4xl font-bold uppercase md:mt-8 md:text-6xl">Blog</h1>
					<h2 className="sr-only">Öne Çıkan Yazılar</h2>
					<div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-12">
						<div className="-mx-4 md:col-span-7 md:mx-0">
							<FeaturedPostsSwiper posts={posts.data.slice(0, 5)} />
						</div>

						<div className="space-y-7.5 md:col-span-5">
							{posts.data.slice(5, 9).map((post) => (
								<Link key={post._id} href={`/blog/${post.attributes.slug}`} className="block">
									<CompactPostCard
										as="h3"
										title={post.attributes.title}
										image={post.attributes.img}
										sizes="178px"
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className="absolute -bottom-16 left-0 z-10 w-full leading-none md:-bottom-[20%] lg:-bottom-[36%]">
					<img
						src="/torn-paper-divider.svg"
						alt=""
						aria-hidden="true"
						loading="lazy"
						decoding="async"
						className="relative left-1/2 block h-auto w-[140%] max-w-none -translate-x-1/2 md:w-[120%]"
					/>
				</div>
			</div>
		</section>
	);
}

export function BlogHeroSkeleton() {
	return (
		<section className="overflow-hidden pt-20 text-black">
			<div className="bg-yellow relative pt-5 pb-40 md:pt-10">
				<img
					src="/metal-texture-with-dust-scratches.avif"
					alt=""
					aria-hidden="true"
					loading="lazy"
					decoding="async"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-20 mix-blend-multiply"
				/>
				<img
					src="/style.svg"
					alt=""
					aria-hidden="true"
					loading="lazy"
					decoding="async"
					className="pointer-events-none absolute -right-4 bottom-4 hidden -rotate-7 object-cover opacity-20 mix-blend-multiply md:block"
				/>
				<div className="container mx-auto px-4">
					<Breadcrumb>
						<BreadcrumbList className="text-current">
							<BreadcrumbItem>
								<BreadcrumbLink asChild className="uppercase">
									<Link href="/">Ana Sayfa</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage className="text-current uppercase">Blog</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<h1 className="font-saira-cond mt-4 text-4xl font-bold uppercase md:mt-8 md:text-6xl">Blog</h1>
					<h2 className="sr-only">Öne Çıkan Yazılar</h2>
					<div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-12">
						<div className="md:col-span-7">
							<FeaturedPostCardSkeleton />
						</div>

						<div className="space-y-7.5 md:col-span-5">
							{Array.from({ length: 4 }).map((_, i) => (
								<CompactPostCardSkeleton key={i} />
							))}
						</div>
					</div>
				</div>
				<div className="absolute -bottom-16 left-0 z-10 w-full leading-none md:-bottom-[20%] lg:-bottom-[36%]">
					<img
						src="/torn-paper-divider.svg"
						alt=""
						aria-hidden="true"
						loading="lazy"
						decoding="async"
						className="relative left-1/2 block h-auto w-[140%] max-w-none -translate-x-1/2 md:w-[120%]"
					/>
				</div>
			</div>
		</section>
	);
}
