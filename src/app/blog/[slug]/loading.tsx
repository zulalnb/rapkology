import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="container mx-auto px-4 pt-30 md:pt-35">
			{/* Breadcrumb */}
			<div className="flex gap-3">
				<Skeleton className="h-4 w-20" />
				<Skeleton className="h-4 w-16" />
				<Skeleton className="h-4 w-32" />
			</div>

			<div className="mt-12">
				<main>
					<div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 xl:gap-25">
						{/* ARTICLE */}
						<div className="space-y-8 md:col-span-7">
							<Skeleton className="h-4 w-24" />

							<Skeleton className="h-16 w-full md:h-20" />
							<Skeleton className="h-8 w-3/4" />

							<Skeleton className="aspect-video w-full" />

							<div className="space-y-3">
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-5/6" />
								<Skeleton className="h-4 w-2/3" />
							</div>

							<div className="flex gap-3">
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-24" />
								<Skeleton className="h-8 w-16" />
							</div>
						</div>

						{/* TRENDING ASIDE */}
						<div className="hidden space-y-10 md:col-span-5 md:block">
							<Skeleton className="h-12 w-40" />

							{Array.from({ length: 4 }).map((_, i) => (
								<div key={i} className="flex gap-6">
									<Skeleton className="h-16 w-12" />

									<div className="flex-1 space-y-3">
										<div className="flex items-center gap-3">
											<Skeleton className="h-10 w-10 rounded-md" />
											<Skeleton className="h-4 w-24" />
										</div>

										<Skeleton className="h-6 w-full" />
										<Skeleton className="h-4 w-32" />
									</div>
								</div>
							))}
						</div>
					</div>

					{/* MORE POSTS */}
					<div className="mt-25 space-y-10 md:mt-15">
						<Skeleton className="h-12 w-64" />

						<div className="space-y-8">
							{Array.from({ length: 3 }).map((_, i) => (
								<div key={i} className="flex gap-6">
									<Skeleton className="h-24 w-44" />
									<div className="flex-1 space-y-3">
										<Skeleton className="h-6 w-3/4" />
										<Skeleton className="h-4 w-32" />
									</div>
								</div>
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
