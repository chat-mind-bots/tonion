"use server";

import { User } from "@prisma/client";
import { createUser } from "../../../../lib/user/create.user";

export const registerUser = async (userDto: Pick<User, "address">) => {
	return createUser(userDto);
};
