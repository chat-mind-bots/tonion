"use server";

import { getCategoryAction } from "@/shared/actions/categories/getCategoryAction";
import { CategoryEditClient } from "@/shared/components/categories/edit/clientSide";

export const CategoryEdit = async ({ id }: { id: string }) => {
	const category = await getCategoryAction(id);

	return category ? <CategoryEditClient category={category} /> : null;
};
