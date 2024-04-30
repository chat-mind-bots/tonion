"use client";
import {
	NavigationLink,
	NavigationLinkProps,
} from "@/shared/components/core/navigation/navigationLink";
import clsx from "clsx";
import { PortfolioSvg } from "@/shared/components/core/navigation/icons/portfolioIcon";

export const Navigation = () => {
	const links: NavigationLinkProps[] = [
		{
			alt: "portfolio",
			href: "portfolio",
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
			href: "orders",
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
		},
	];

	return (
		<nav
			className={clsx(
				"w-full",
				"fixed",
				"bg-colors-telegram-section-bg-color",
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
