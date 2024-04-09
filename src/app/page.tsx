"use client";
import Image from "next/image";
import { TonConnectButton } from "@tonconnect/ui-react";
import WalletInfo from "@/shared/components/WalletInfo";
import Address from "@/shared/components/Adress";

export default function Home() {
	return (
		<div>
			<Address />
			<WalletInfo />
			<TonConnectButton />
		</div>
	);
}
