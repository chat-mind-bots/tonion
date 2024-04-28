"use server";
import { Wallet } from "@tonconnect/sdk";
import { TonProofItemReplySuccess } from "@tonconnect/ui";
import {
	ConvertTonProofMessage,
	CreateMessage,
	SignatureVerify,
} from "./tonProof";
import axios from "axios";
import { cookies } from "next/headers";
import { encrypt } from "../auth/crypt";
import { getUser } from "../user/get.user";
import { createUser } from "../user/create.user";
import { User } from "@prisma/client";
import { login } from "../auth/login";

async function check(walletInfo: Wallet) {
	console.log(walletInfo);
	if (!walletInfo?.connectItems?.tonProof) {
		throw "No tonProof 1 ";
	}
	const proof = walletInfo.connectItems.tonProof as TonProofItemReplySuccess;
	if (!proof) {
		throw "No tonProof 2";
	}

	const { data } = await axios(
		`https://${
			walletInfo.account.chain === "-3" ? "testnet." : ""
		}tonapi.io/v2/accounts/${encodeURI(walletInfo.account.address)}/publickey`
	);

	const pubkey = Buffer.from(data.public_key, "hex");

	const parsedMessage = ConvertTonProofMessage(walletInfo, proof);
	const checkMessage = await CreateMessage(parsedMessage);

	const verifyRes = SignatureVerify(
		pubkey,
		checkMessage,
		parsedMessage.Signature
	);

	if (!verifyRes) {
		throw "Bad verification";
	}

	return login(walletInfo.account.address);
}

export default check;
