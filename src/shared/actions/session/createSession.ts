import prisma from "../../../../lib/prisma";

export const createSession = async (sessionDto: {
	expiredAt: Date;
	userId: string;
}) => {
	const session = await prisma.session.create({ data: sessionDto });

	return prisma.session.findUnique({ where: { id: session.id } });
};
