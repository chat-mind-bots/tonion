import prisma from "../prisma";
import { Category } from "@prisma/client";
import { checkAdmin } from "../auth/checkAdmin";
import { CreateCategoryDto } from "./creteCategory";
import { getCategory } from "./getCategory";

export const updateCategory = async ({
	id,
	...data
}: Partial<CreateCategoryDto> & { id: string }) => {
	await checkAdmin();

	const category = prisma.category.update({
		where: { id },
		data: {
			...data,
			parentId: data.parentId,
		},
	});

	return category;
};
