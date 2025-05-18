import { getSession } from "../session/getSession";
import prisma from "../prisma";

export const checkAuth = async () => {
	const data = await getSession();

	if (!data) {
		throw "No session";
	}

	const user = await prisma.user.findUnique({ where: { id: data.user.id } });

	if (!user) {
		throw "No user";
	}

	return user;
};
