"use client";
import {
	useTonAddress,
	useTonConnectUI,
	useTonWallet,
} from "@tonconnect/ui-react";
import check from "@/../lib/ton-connect/check";

const Address = () => {
	const userFriendlyAddress = useTonAddress();
	const rawAddress = useTonAddress(false);
	const wallet = useTonWallet();

	return (
		rawAddress && (
			<div>
				<span>User-friendly address: {userFriendlyAddress}</span>
				<span>Raw address: {rawAddress}</span>
				<button
					onClick={() => {
						wallet && check(wallet);
					}}
				>
					Check address
				</button>
			</div>
		)
	);
};

export default Address;
