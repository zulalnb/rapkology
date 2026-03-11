import type { Metadata } from "next";
import { getPostBySlug, getPostPageData } from "@/lib/fetch-posts";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostArticle } from "@/components/blog/blog-post-article";
import { TrendingPostsAside } from "@/components/blog/trending-posts-aside";
import { MorePostsSection } from "@/components/blog/more-posts-section";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = (await params).slug;
	const post = await getPostBySlug(slug, { cache: "no-store" });

	if (!post) {
		return { title: "404" };
	}

	const title = post.attributes.seo.metaTitle;
	const description = post.attributes.seo.metaDescription;
	const canonical = `/blog/${post.attributes.seo.canonicalURL}`;

	return {
		title,
		description,
		alternates: {
			canonical,
		},
		openGraph: {
			title,
			description,
			images: [post.attributes.img],
			url: canonical,
		},
	};
}

export default async function BlogPost({ params }: Props) {
	const slug = (await params).slug;
	const { post, trendingPosts, morePosts } = await getPostPageData(slug, {
		cache: "no-store",
		trendingLimit: 4,
		moreLimit: 3,
	});

	if (!post) {
		return notFound();
	}

	return (
		<div className="container mx-auto px-4 pt-30 md:pt-35">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild className="uppercase">
							<Link href="/">Ana Sayfa</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild className="uppercase">
							<Link href="/blog">Blog</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="uppercase">{post.attributes.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="mt-12">
				<main>
					<div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 xl:gap-25">
						<BlogPostArticle className="md:col-span-7" post={post} />
						<TrendingPostsAside
							posts={trendingPosts}
							className="md:sticky md:top-30 md:col-span-5 md:self-start"
						/>
					</div>
					<MorePostsSection className="mt-25 md:mt-15" posts={morePosts} />
				</main>
			</div>
		</div>
	);
}
