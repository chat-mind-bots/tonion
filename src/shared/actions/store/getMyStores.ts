"use server";

import { getStoresMy } from "../../../../lib/store/getStoresMy";

export const getMyStores = async () => {
	return getStoresMy();
};
