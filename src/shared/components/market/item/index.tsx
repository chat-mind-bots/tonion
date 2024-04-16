import React from "react";
import clsx from "clsx";
import Button from "@/shared/components/core/button";
import Typography from "@/shared/components/core/typography";

interface MarketItemProps {
	title: string;
	description?: string;
}
const MarketItem = ({ title, description }: MarketItemProps) => {
	return (
		<div className={clsx("bg-colors-telegram-background")}>
			<div></div>
			<div>
				<Typography variant={"h3"}>{title}</Typography>
				<Typography>{description}</Typography>
			</div>
			<Button>Open</Button>
		</div>
	);
};

export default MarketItem;
