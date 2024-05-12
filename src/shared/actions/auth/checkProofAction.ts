"use server";

import { checkProof } from "../../../../lib/ton-connect/checkProof";

export const checkProofAction = async (proof: string) => {
	return checkProof(proof);
};
