"use server";

import { getSessionByAddress } from "../../../../lib/session/getSessionByAdderss";

export const getSessionByAddressAction = async (address: string) => {
	return getSessionByAddress(address);
};
