import prisma from "../prisma";
import { getSession } from "../session/getSession";

export const getStoresMy = async (limit?: number) => {
	const user = await getSession();

	if (!user?.user) {
		return [];
	}
	const stores = await prisma.store.findMany({
		where: { ownerId: user.user.id },
		take: limit,
		include: {
			skills: {
				select: {
					title: true
				}
			}
		}
	});
	return stores;
};
