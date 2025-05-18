import prisma from "../prisma";
import { getUser } from "../user/get.user";

export const getSessionByAddress = async (address: string) => {
	const user = await getUser(address);
	if (!user) {
		return null;
	}

	const session = await prisma.session.findUnique({
		where: { userId: user.id },
	});

	if (!session) {
		return null;
	}
	const sessionDate = new Date(session.expiredAt);
	const now = new Date();

	if (now > sessionDate) {
		return null;
	}

	return session;
};
