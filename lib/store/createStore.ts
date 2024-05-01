"use server";

import { Prisma } from "@prisma/client";
import prisma from "../prisma";
import { getStoreById } from "./getStoreById";
import { getSession } from "../session/getSession";

export const createStore = async (
	storeDto: Omit<Prisma.StoreCreateInput, "owner">
) => {
	const data = await getSession();

	if (!data) {
		throw "No session";
	}

	const user = await prisma.user.findUnique({ where: { id: data.user.id } });

	if (!user) {
		throw "No user";
	}

	const store = await prisma.store.create({
		data: { ownerId: user.id, ...storeDto },
	});
	return getStoreById(store.id);
};
