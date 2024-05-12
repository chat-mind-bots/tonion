import prisma from "../prisma";

export const getCategory = async (id: string) => {
	const category = prisma.category.findUnique({ where: { id } });

	return category;
};
