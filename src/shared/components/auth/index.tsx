"use client";

import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

const AuthComponent = () => {
	return (
		<div className={"text-telegram-text"}>
			<TonConnectButton />
		</div>
	);
};

export default AuthComponent;
