import prisma from "../prisma";
import { getSession } from "../auth/getSession";

export const getStoresMy = async (limit?: number) => {
	const user = await getSession();

	if (!user?.user) {
		return [];
		// throw "No session";
	}
	const stores = await prisma.store.findMany({
		where: { ownerId: user.user.id },
		take: limit,
	});
	return stores;
};
