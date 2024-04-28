import { User } from "@prisma/client";
import { getUser } from "../user/get.user";
import { createUser } from "../user/create.user";
import { encrypt } from "./crypt";
import { cookies } from "next/headers";

export const login = async (address: string) => {
	const expires = new Date(Date.now() + 10 * 1000);
	let user: User | null = await getUser(address);
	if (!user) {
		user = await createUser({ address });
	}
	const session = await encrypt({ user, expires });

	cookies().set("session", session, { expires, httpOnly: true });
	return "Success";
};
