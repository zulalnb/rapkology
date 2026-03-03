import { Favorite } from "@/types/favorite";
import { FavoritesSwiper } from "./favorites-swiper";

async function getFavorites(): Promise<Favorite[]> {
	const res = await fetch("https://dummyjson.com/c/0ef8-9a6e-4f05-8ac4", {
		next: { revalidate: 60 * 60 },
	});

	if (!res.ok) return [];
	return (await res.json()) as Favorite[];
}

export async function FavoritesSwiperSection() {
	const res = await getFavorites();

	return <FavoritesSwiper favorites={res} />;
}
