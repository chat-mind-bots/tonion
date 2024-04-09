"use client";
import Image from "next/image";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Address } from "@/shared/components/Adress";
import WalletInfo from "@/shared/components/WalletInfo";

export default function Home() {
	return (
		<div>
			<Address />
			<WalletInfo />
			<TonConnectButton />
		</div>
	);
}
