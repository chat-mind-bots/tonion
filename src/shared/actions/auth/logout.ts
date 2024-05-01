"use server";

import { logout } from "../../../../lib/auth/logout";

export const logoutUI = async (address: string) => {
	await logout(address);
};
