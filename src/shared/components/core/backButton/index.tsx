"use client";

import { useEffect } from "react";
import { useBackButton } from "@tma.js/sdk-react";
import { useRouter } from "next/navigation";

interface IBackButtonProps {
	url: string;
}

export const BackButton = ({ url }: IBackButtonProps) => {
	const router = useRouter();

	const backButton = useBackButton();

	useEffect(() => {
		const onBackButtonClick = () => {
			console.log("click");
			router.push(url);
		};
		backButton.show();
		backButton.on("click", onBackButtonClick);

		return () => {
			backButton.hide();
			backButton.off("click", onBackButtonClick);
		};
	}, []);

	return null;
};
