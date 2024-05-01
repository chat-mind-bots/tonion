import prisma from "../prisma";
import { getSession } from "../session/getSession";

export const getStoresMy = async () => {
	const user = await getSession();

	if (!user?.user) {
		return [];
	}
	const stores = await prisma.store.findMany({
		where: { ownerId: user.user.id },
	});
	return stores;
};
