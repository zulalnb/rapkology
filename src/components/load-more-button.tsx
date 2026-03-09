import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

type LoadMoreButtonProps = {
	onClick: () => void;
	isLoading: boolean;
	hasNextPage: boolean;
};

export function LoadMoreButton({ onClick, isLoading, hasNextPage }: LoadMoreButtonProps) {
	if (!hasNextPage) return null;

	return (
		<div className="mt-10.5 flex justify-center md:mt-18">
			{isLoading ? (
				<Spinner />
			) : (
				<Button
					onClick={onClick}
					className="rounded-none bg-white font-bold [clip-path:polygon(95%_100%,100%_0,0_2%,5%_90%)]"
					size="lg"
				>
					Daha Fazla Gör
				</Button>
			)}
		</div>
	);
}
