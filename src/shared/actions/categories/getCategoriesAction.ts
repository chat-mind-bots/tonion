"use server";

import { getCategories } from "../../../../lib/categories/getCategories";

export const getCategoriesAction = async () => {
	const categories = await getCategories();
	return categories;
};
