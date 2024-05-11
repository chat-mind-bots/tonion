import prisma from "../prisma";
import { Prisma } from "@prisma/client";
import { checkAdmin } from "../auth/checkAdmin";

export interface CreateCategoryDto {
	name: string;
	description: string;
	parentId: string;
}

export const creteCategory = async ({
	name,
	description,
	parentId,
}: CreateCategoryDto) => {
	await checkAdmin();

	const parentCategory = parentId
		? await prisma.category.findUnique({ where: { id: parentId } })
		: undefined;

	const data: Prisma.CategoryCreateInput = {
		name,
		description,
		...(parentCategory ? { parentId: parentCategory.parentId } : {}),
	};

	const category = await prisma.category.create({ data: data });

	return category;
};
