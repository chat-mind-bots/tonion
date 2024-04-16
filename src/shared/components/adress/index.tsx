"use client";
import { useTonAddress } from "@tonconnect/ui-react";
const Address = () => {
	const userFriendlyAddress = useTonAddress();
	const rawAddress = useTonAddress(false);
	return (
		<>
			<div className={"bg-telegram-white text-telegram-black top-2"}>
				test bg
			</div>
			<span className="text-telegram-link">
				mauriciobraz/next.js-telegram-webapp
			</span>
			{rawAddress && (
				<div>
					<span>User-friendly address: {userFriendlyAddress}</span>
					<span>Raw address: {rawAddress}</span>
				</div>
			)}
		</>
	);
};

export default Address;
