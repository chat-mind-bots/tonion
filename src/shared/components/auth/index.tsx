"use client";

import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import Address from "@/shared/components/adress";
import WalletInfo from "@/shared/components/wallet/WalletInfo";

const AuthComponent = () => {
	return (
		<div className={"text-telegram-text"}>
			<Address />
			<WalletInfo />
			<TonConnectButton />
		</div>
	);
};

export default AuthComponent;
