import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function truncateText(str: string, limit = 88, suffix = "") {
	if (str.length <= limit) return str;

	const truncated = str
		.split(" ")
		.reduce((acc, word) => ((acc + " " + word).trim().length > limit ? acc : (acc + " " + word).trim()), "");

	return truncated + suffix;
}

export function slugify(value: string) {
	return value
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-")
		.replace(/[^\w-]+/g, "");
}
