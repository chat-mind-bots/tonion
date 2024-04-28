import { useContext, useEffect, useRef } from "react";
import {
	useIsConnectionRestored,
	useTonConnectUI,
	useTonWallet,
	TonConnectUIContext,
} from "@tonconnect/ui-react";
import { BackendTokenContext } from "@/app/providers";
import { generatePayload } from "../../lib/ton-connect/generatePayload";
import check from "../../lib/ton-connect/check";
import { cookies } from "next/headers";

const localStorageKey = "my-tonion-auth-token";
const payloadTTLMS = 1000 * 60 * 20;

export const useAuth = () => {
	// const { setToken } = useContext(BackendTokenContext);
	// const {walletInfo} = useContext(TonConnectUIContext);
	const isConnectionRestored = useIsConnectionRestored();
	const wallet = useTonWallet();
	const [tonConnectUI] = useTonConnectUI();
	const interval = useRef<ReturnType<typeof setInterval> | undefined>();
	// console.log(tonContext);
	useEffect(() => {
		if (!isConnectionRestored) {
			return;
		}
		clearInterval(interval.current);

		if (!wallet) {
			const refreshPayload = async () => {
				tonConnectUI.setConnectRequestParameters({ state: "loading" });

				const value = await generatePayload();

				if (!value) {
					tonConnectUI.setConnectRequestParameters(null);
				} else {
					tonConnectUI.setConnectRequestParameters({ state: "ready", value });
				}
			};

			refreshPayload();
			setInterval(refreshPayload, payloadTTLMS);
			return;
		}
		if (
			wallet.connectItems?.tonProof &&
			!("error" in wallet.connectItems.tonProof)
		) {
			check(wallet).then((result) => {
				if (!result) {
					alert("Please try another wallet");
					tonConnectUI.disconnect();
				}
			});
		} else {
			alert("Please try another wallet");
			tonConnectUI.disconnect();
		}
	}, [wallet, isConnectionRestored, tonConnectUI]);
};
