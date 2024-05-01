import prisma from "../../../../lib/prisma";
import { createSession } from "@/shared/actions/session/createSession";

export const updateOrCreateSession = async ({
	expiredAt,
	userId,
}: {
	userId: string;
	expiredAt: Date;
}) => {
	const sessionInDb = await prisma.session.findUnique({ where: { userId } });

	if (sessionInDb) {
		await prisma.session.update({
			where: { userId },
			data: { expiredAt: expiredAt },
		});
		return;
	}

	await createSession({ expiredAt, userId });
	return;
};
