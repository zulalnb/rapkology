"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type ExploreView = "list" | "grid";

type ExploreViewContextType = {
	view: ExploreView;
	setView: (view: ExploreView) => void;
	isGrid: boolean;
	isList: boolean;
};

const ExploreViewContext = createContext<ExploreViewContextType | null>(null);

export function ExploreViewProvider({ children }: { children: React.ReactNode }) {
	const [view, setView] = useState<ExploreView>("list");

	const value = useMemo(
		() => ({
			view,
			setView,
			isGrid: view === "grid",
			isList: view === "list",
		}),
		[view],
	);

	return <ExploreViewContext.Provider value={value}>{children}</ExploreViewContext.Provider>;
}

export function useExploreView() {
	const context = useContext(ExploreViewContext);

	if (!context) {
		throw new Error("useExploreView must be used within ExploreViewProvider");
	}

	return context;
}
