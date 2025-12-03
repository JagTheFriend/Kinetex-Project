import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
	return (
		<article className="flex flex-col overflow-hidden rounded-lg bg-card card-shadow hover:card-shadow-hover border-2 cursor-progress">
			<div className="relative aspect-16/10 overflow-hidden">
				<Skeleton className="h-full w-full bg-neutral-300" />
			</div>

			<div className="flex flex-1 flex-col p-4">
				<Skeleton className="h-12 w-full bg-neutral-300" />
			</div>
		</article>
	);
};

export default function Skeletons() {
	return (
		<div className="flex flex-col gap-8">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
			</div>
		</div>
	);
}
