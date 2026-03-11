import { Suspense } from "react";
import { TagFilterBar, TagFilterBarSkeleton } from "./tag-filter-bar";
import { PostsSection } from "./posts-section";
import ExploreHeader from "./explore-header";
import { ExploreViewProvider } from "./explore-view-provider";
import { ExplorePostCardSkeleton } from "../blog/cards/explore-post-card";

export default async function Explore({ className }: { className?: string }) {
	return (
		<section id="explore" className={className} aria-labelledby="explore-heading">
			<div className="container mx-auto px-4 py-15 md:py-20">
				<ExploreViewProvider>
					<ExploreHeader />
					<nav className="mt-10.5 md:mt-13">
						<h3 className="font-saira-cond mb-5.5 text-3xl font-bold uppercase md:sr-only md:mb-0 md:text-[2.5rem]">
							Ne Görmek İstersin?
						</h3>
						<Suspense fallback={<TagFilterBarSkeleton />}>
							<TagFilterBar />
						</Suspense>
					</nav>
					<Suspense
						fallback={
							<div className="mt-15 grid grid-cols-1 gap-x-5 gap-y-15 md:grid-cols-12 lg:mt-24 lg:gap-x-10 lg:gap-y-20">
								{Array.from({ length: 4 }).map((_, i) => (
									<div key={i} className="md:col-span-6">
										<ExplorePostCardSkeleton />
									</div>
								))}
							</div>
						}
					>
						<PostsSection />
					</Suspense>
				</ExploreViewProvider>
			</div>
		</section>
	);
}
