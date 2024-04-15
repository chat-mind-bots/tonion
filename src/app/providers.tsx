"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<TonConnectUIProvider
			manifestUrl={`http://localhost:3000/manifest.json`} //TODO: fix URL
		>
			{children}
		</TonConnectUIProvider>
	);
}
