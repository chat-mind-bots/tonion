import { useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect } from "react";
import { loginUI } from "@/shared/actions/auth/login";
import { logoutUI } from "@/shared/actions/auth/logout";
import { geProofPhrase } from "../../lib/ton-connect/geProof";

const getProof = async () => {
	const proof = await geProofPhrase();
	return proof;
};

export const useLogin = () => {
	const [tonConnectUI] = useTonConnectUI();

	const auth = async () => {
		tonConnectUI.setConnectRequestParameters({
			state: "loading",
		});

		const proof = await getProof();

		tonConnectUI.setConnectRequestParameters({
			state: "ready",
			value: {
				tonProof: proof,
			},
		});
	};

	useEffect(() => {
		auth();
	}, []);

	useEffect(() => {
		tonConnectUI.onStatusChange((wallet) => {
			if (
				wallet &&
				wallet.connectItems?.tonProof &&
				"proof" in wallet.connectItems.tonProof
			) {
				loginUI(wallet.account.address);
			}
			if (!wallet) {
				logoutUI();
			}
		});
	}, []);
};
