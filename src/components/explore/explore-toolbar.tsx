"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { GridView, ListView } from "@/assets";
import { useExploreView } from "./explore-view-provider";

export function ExploreToolbar() {
	const { setView } = useExploreView();

	return (
		<div className="flex">
			<Button variant="ghost" size="icon-lg" aria-label="Ara">
				<SearchIcon />
			</Button>
			<Button variant="ghost" size="icon-lg" onClick={() => setView("list")}>
				<ListView />
			</Button>
			<Button variant="ghost" size="icon-lg" onClick={() => setView("grid")}>
				<GridView />
			</Button>
		</div>
	);
}
