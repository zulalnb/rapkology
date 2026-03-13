import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";
import { getPosts } from "@/lib/fetch-posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticRoutes = [
		{
			url: BASE_URL,
			lastModified: new Date(),
		},
		{
			url: `${BASE_URL}/blog`,
			lastModified: new Date(),
		},
	];

	const res = await getPosts({ limit: 10 });
	const blogRoutes = res.data.map((item) => ({
		url: `${BASE_URL}/blog/${item.attributes.slug}`,
		lastModified: item.updatedAt,
	}));

	return [...staticRoutes, ...blogRoutes];
}
