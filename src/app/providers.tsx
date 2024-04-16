"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Script from "next/script";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<TonConnectUIProvider
			manifestUrl={`https://localhost:3000/manifest.json`} //TODO: fix URL
		>
			<Script
				src="https://telegram.org/js/telegram-web-app.js"
				strategy={"beforeInteractive"}
			/>
			{children}
		</TonConnectUIProvider>
	);
}
