import { CompassIcon } from "lucide-react";
import { ExploreToolbar } from "./explore-toolbar";

export default function ExploreHeader() {
	return (
		<div className="flex items-center justify-between gap-3">
			<h2 id="explore-heading" className="font-saira-cond text-[2.25rem] font-bold uppercase md:text-6xl">
				Keşfet <CompassIcon className="text-yellow inline-block size-9 align-middle md:size-13" />
			</h2>

			<ExploreToolbar />
		</div>
	);
}
