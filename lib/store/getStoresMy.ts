import prisma from "../prisma";
import { getSession } from "../auth/getSession";

export const getStoresMy = async () => {
	const user = await getSession();

	if (!user?.user) {
		return [];
		// throw "No session";
	}
	const stores = await prisma.store.findMany({
		where: { ownerId: user.user.id },
	});
	return stores;
};
