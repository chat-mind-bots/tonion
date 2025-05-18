"use server";
import { ConnectAdditionalRequest } from "@tonconnect/sdk";

export const generatePayload = async (): Promise<ConnectAdditionalRequest> => {
	const data: ConnectAdditionalRequest = {
		tonProof: process.env.TON_PROOF,
	};
	return data;
};
