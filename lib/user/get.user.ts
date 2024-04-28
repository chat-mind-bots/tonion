import prisma from "../prisma";

export const getUser = async (address: string) => {
	const user = prisma.user.findUnique({
		where: { address: String(address) },
	});

	return user;
};
