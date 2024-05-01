import { cookies } from "next/headers";
import { decrypt } from "./crypt";

export const getSession = async () => {
	const session = cookies().get("session")?.value;
	if (!session) return null;
	return await decrypt(session);
};
