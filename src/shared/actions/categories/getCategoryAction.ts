"use server";

import { getCategory } from "../../../../lib/categories/getCategory";

export const getCategoryAction = (id: string | null) => {
	if (!id) {
		return null;
	}
	return getCategory(id);
};
