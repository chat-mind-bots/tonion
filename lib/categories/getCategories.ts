import prisma from "../prisma";

export const getCategories = async () => {
	const categories = await prisma.category.findMany();

	return categories;
};
