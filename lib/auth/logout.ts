import { cookies } from "next/headers";
import { removeSession } from "../session/removeSession";

export const logout = async (address: string) => {
	cookies().set("session", "", { expires: new Date(0) });
	await removeSession(address);
};
