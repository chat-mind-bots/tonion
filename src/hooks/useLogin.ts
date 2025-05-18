import {
	useIsConnectionRestored,
	useTonConnectUI,
	useTonWallet,
} from "@tonconnect/ui-react";
import { useEffect, useRef, useState } from "react";
import { loginUI } from "@/shared/actions/auth/login";
import { logoutUI } from "@/shared/actions/auth/logout";
import { geProofPhrase } from "../../lib/ton-connect/geProof";
import { checkProofAction } from "@/shared/actions/auth/checkProofAction";
import { getSessionByAddressAction } from "@/shared/actions/session/getSessionByAddressAction";

const payloadTTLMS = 1000 * 60 * 20;

export const useLogin = () => {
	const [prevAddress, setPrevAddress] = useState("");
	const [tonConnectUI] = useTonConnectUI();
	const isConnectionRestored = useIsConnectionRestored();
	const wallet = useTonWallet();
	const interval = useRef<ReturnType<typeof setInterval> | undefined>();

	useEffect(() => {
		if (!isConnectionRestored) {
			return;
		}

		clearInterval(interval.current);

		if (!wallet) {
			const refreshPayload = async () => {
				tonConnectUI.setConnectRequestParameters({ state: "loading" });

				const proof = await geProofPhrase();

				if (proof) {
					tonConnectUI.setConnectRequestParameters({
						state: "ready",
						value: {
							tonProof: proof,
						},
					});
				} else {
					tonConnectUI.setConnectRequestParameters(null);
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
			checkProofAction(wallet.connectItems.tonProof.proof.payload)
				.then(() => {
					loginUI(wallet.account.address);
				})
				.catch(() => {
					logoutUI(wallet.account.address);
					tonConnectUI.disconnect();
				});
		} else {
			getSessionByAddressAction(wallet.account.address)
				.then(() => {
					loginUI(wallet.account.address);
				})
				.catch(() => {
					logoutUI(wallet.account.address);
					tonConnectUI.disconnect();
				});
		}
	}, [isConnectionRestored, tonConnectUI, wallet]);

	useEffect(() => {
		tonConnectUI.onStatusChange((wallet) => {
			if (!isConnectionRestored) {
				return;
			}
			if (!wallet) {
				logoutUI(prevAddress);
			} else {
				setPrevAddress(wallet.account.address);
			}
		});
	}, [prevAddress, isConnectionRestored]);
};
