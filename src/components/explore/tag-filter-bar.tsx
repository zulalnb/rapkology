import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export type TagFilter = {
	name: string;
	slug: string;
};

export async function getTagFilters(): Promise<TagFilter[]> {
	const res = await fetch("https://dummyjson.com/c/a244-0559-4878-8936", {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch tag filters: ${res.status}`);
	}
	const data: TagFilter[] = await res.json();
	return data;
}

export async function TagFilterBar() {
	const tags = await getTagFilters();

	return (
		<div className="full-bleed">
			<ul className="container mx-auto flex gap-5 px-4 whitespace-nowrap">
				{tags.map((tag) => (
					<li key={tag.slug}>
						<Button
							variant="outline"
							className={cn(
								"focus:bg-yellow rounded-none border-white bg-transparent px-5 py-2.5 font-normal focus:border-black focus:font-bold focus:text-black",
							)}
						>
							{tag.name}
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
}

export function TagFilterBarSkeleton() {
	return (
		<div className="flex gap-5 overflow-hidden">
			{Array.from({ length: 10 }).map((_, i) => (
				<Skeleton key={i} className="h-9 w-25 shrink-0" />
			))}
		</div>
	);
}
