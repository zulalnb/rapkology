import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";
import packageJson from "./package.json";
const nextVersion = packageJson.dependencies.next;

const nextConfig: NextConfig = {
	trailingSlash: true,
	env: {
		NEXT_PUBLIC_NEXT_VERSION: nextVersion,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
				pathname: "/image/**",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/dgbjlgpfh/image/upload/**",
			},
		],
	},
	webpack(config) {
		const fileLoaderRule = config.module.rules.find(
			(rule: RuleSetRule) => rule.test instanceof RegExp && rule.test.test(".svg"),
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ["@svgr/webpack"],
			},
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},
};

export default nextConfig;
