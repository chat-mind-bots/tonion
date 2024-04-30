"use server";

import { login } from "../../../../lib/auth/login";

export const loginUI = async (address: string, proof: string) => {
	return await login(address, proof);
};
