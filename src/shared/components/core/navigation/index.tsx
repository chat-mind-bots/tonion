"use client";
import {
	NavigationLink,
	NavigationLinkProps,
} from "@/shared/components/core/navigation/navigationLink";
import clsx from "clsx";
import { useTonAddress } from "@tonconnect/ui-react";
import { PortfolioSvg } from "@/shared/components/core/icons/portfolio.icon";

export const Navigation = () => {
	const address = useTonAddress();

	const links: NavigationLinkProps[] = [
		{
			alt: "portfolio",
			href: "/portfolio",
			displayName: "Portfolio",
			icon: (
				<PortfolioSvg
					className={clsx(
						{
							"fill-current": true,
						},
						"w-[23px]",
						"h-[23px]"
					)}
				/>
			),
			isDisabled: !address,
		},
		{
			alt: "market",
			href: "/",
			displayName: "Market",
			icon: (
				<PortfolioSvg
					className={clsx(
						{
							"fill-current": true,
						},
						"w-[23px]",
						"h-[23px]"
					)}
				/>
			),
		},
		{
			alt: "orders",
			href: "/orders",
			displayName: "My Orders",
			icon: (
				<PortfolioSvg
					className={clsx(
						{
							"fill-current": true,
						},
						"w-[23px]",
						"h-[23px]"
					)}
				/>
			),
			isDisabled: !address,
		},
		{
			alt: "categories",
			href: "/categories",
			displayName: "categories",
			icon: (
				<PortfolioSvg
					className={clsx(
						{
							"fill-current": true,
						},
						"w-[23px]",
						"h-[23px]"
					)}
				/>
			),
			isDisabled: !address,
		},
	];

	return (
		<nav
			className={clsx(
				"w-full",
				"fixed",
				"bg-colors-telegram-background",
				"bottom-0",
				"flex",
				"items-center",
				"justify-center",
				"gap-4",
				"border-t-2",
				"border-colors-telegram-button-text-color",
				"py-2"
			)}
		>
			<ul className={clsx("flex", "justify-center", "gap-4")}>
				{links.map(NavigationLink)}
			</ul>
		</nav>
	);
};
