import { User, Prisma } from "@prisma/client";
import prisma from "../prisma";
import { getUser } from "./get.user";

export const createUser = async (userDto: Pick<User, "address">) => {
	const user: Prisma.UserCreateInput = { address: userDto.address };
	await prisma.user.create({ data: user });
	return getUser(userDto.address);
};
