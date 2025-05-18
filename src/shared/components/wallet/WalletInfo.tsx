import React from "react";
import { useTonWallet } from "@tonconnect/ui-react";

const WalletInfo = () => {
	const wallet = useTonWallet();

	if (!wallet) {
		return null;
	}

	return <div>{wallet.account.address}</div>;
};

export default WalletInfo;
