import prisma from "../prisma";
import { getSessionByAddress } from "./getSessionByAdderss";

export const removeSession = async (address: string) => {
	const session = await getSessionByAddress(address);
	if (session) {
		await prisma.session.delete({ where: { id: session.id } });
	}
};
