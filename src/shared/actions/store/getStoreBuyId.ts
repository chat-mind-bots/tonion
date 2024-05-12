"use server";
import { getStoreById } from "../../../../lib/store/getStoreById";

export const getStoreByIdAction = async (id: string) => {
	return getStoreById(id);
};
