import React from "react";
import clsx from "clsx";
import Button from "@/shared/components/core/button";
import Typography from "@/shared/components/core/typography";
import { DynamicPng } from "@/shared/components/core/image/dynamic-png";
import Link from "next/link";

interface MarketItemProps {
	title: string;
	editLink?: string;
	description?: string;
	skills?: string[];
}
const MarketItem = ({
	title,
	description,
	skills,
	editLink,
}: MarketItemProps) => {
	return (
		<div
			className={clsx(
				"bg-colors-telegram-background p-[5px] pr-[20px] flex gap-2 justify-between"
			)}
		>
			<div className={clsx("flex", "gap-[14px]")}>
				<div className={clsx("w-[72px]", "h-[72px]")}>
					<DynamicPng
						name={"pavel"}
						height={400}
						width={720}
						alt={"test"}
						className={"aspect-square"}
					/>
				</div>
				<div>
					<Typography variant={"h3"} bold>
						{title}
					</Typography>
					<Typography>{description}</Typography>
					{skills && skills.length > 0 && (
						<Typography>Skills: {skills.join(" ")}</Typography>
					)}
				</div>
			</div>
			<div className={clsx("flex gap-2")}>
				<Button>Open</Button>
				{editLink && (
					<Button>
						<Link href={editLink}>Edit</Link>
					</Button>
				)}
			</div>
		</div>
	);
};

export default MarketItem;
