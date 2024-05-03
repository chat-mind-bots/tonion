"use client";

import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useLogin } from "@/hooks/useLogin";

const AuthComponent = () => {
	useLogin();
	return (
		<div className={"text-telegram-text"}>
			<TonConnectButton />
		</div>
	);
};

export default AuthComponent;
