import prisma from "../prisma";

export const getStoreById = (id: string) => {
	return prisma.store.findUnique({
		where: { id },
		include: {
			skills: {
				select: {
					title: true,
				},
			},
		},
	});
};
