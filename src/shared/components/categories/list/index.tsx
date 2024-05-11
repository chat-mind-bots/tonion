"use server";

import { getCategoriesAction } from "@/shared/actions/categories/getCategoriesAction";

export const CategoriesList = async () => {
	const categories = (await getCategoriesAction()) ?? [];

	return categories.map((category) => {
		return <div key={`category - ${category.id}`}>{category.name}</div>;
	});
};
