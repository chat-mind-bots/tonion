"use server";

import { login } from "../../../../lib/auth/login";

export const loginUI = async (address: string) => {
	return await login(address);
};
