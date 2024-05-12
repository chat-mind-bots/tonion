import prisma from "../prisma";
import { Category } from "@prisma/client";

export const getCategories = async (): Promise<Category[]> => {
	const categories = await prisma.category.findMany();

	return categories;
};
