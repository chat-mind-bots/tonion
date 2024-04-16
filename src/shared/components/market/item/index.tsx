import React from "react";
import clsx from "clsx";
import Button from "@/shared/components/core/button";
import Typography from "@/shared/components/core/typography";
import { DynamicPng } from "@/shared/components/core/image/dynamic-png";

interface MarketItemProps {
	title: string;
	description?: string;
}
const MarketItem = ({ title, description }: MarketItemProps) => {
	return (
		<div className={clsx("bg-colors-telegram-background p-[2px] flex")}>
			<div>
				<DynamicPng
					name={"https://localhost:3000/pavel"}
					height={72}
					width={72}
					alt={"test"}
				/>
			</div>
			<div>
				<Typography variant={"h3"}>{title}</Typography>
				<Typography>{description}</Typography>
			</div>
			<Button>Open</Button>
		</div>
	);
};

export default MarketItem;
