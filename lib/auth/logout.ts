import { cookies } from "next/headers";

export const logout = () => {
	cookies().set("session", "", { expires: new Date(0) });
};
