"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { createContext, useState } from "react";

export const BackendTokenContext = createContext<{
	token: string | null;
	setToken?: (val: string | null) => void;
}>({ token: null });

export function Providers({ children }: { children: React.ReactNode }) {
	const [token, setToken] = useState<string | null>(null);
	return (
		<TonConnectUIProvider
			manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json" //TODO: fix URL
			language="en"
			uiPreferences={{ theme: "SYSTEM" }}
		>
			<BackendTokenContext.Provider value={{ token, setToken }}>
				{children}
			</BackendTokenContext.Provider>
		</TonConnectUIProvider>
	);
}
