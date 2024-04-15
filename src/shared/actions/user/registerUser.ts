"use server";

import prisma from "../../../../lib/prisma";
import { User } from "@prisma/client";

export const registerUser = async (userDto: Pick<User, "address">) => {
	const user = await prisma.user.create({ data: { address: userDto.address } });
	return user;
};
