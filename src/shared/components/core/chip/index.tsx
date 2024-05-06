import React from "react";
import clsx from "clsx";
import Typography from "@/shared/components/core/typography";

interface ChipProps {
	label: string;
	onDelete?: () => void;
}

const Chip = ({ label, onDelete }: ChipProps) => {
	return (
		<div
			className={clsx(
				"inline-flex",
				"items-center",
				"justify-between",
				"max-w-[230px]",
				"gap-1",
				"h-[28px]",
				"px-[5px]",
				"py-[8px]",
				"bg-colors-telegram-button-background",
				"text-ellipsis",
				"overflow-hidden",
				"rounded-[4px]",
				"whitespace-nowrap",
				"border-none",
				"outline-none",
				"select-none",
				"font-medium",
				"text-base",
				"leading-tight",
				"tracking-tighter"
			)}
		>
			{onDelete && (
				<img
					src="https://getmatch.ru/static/img/icons/icon-times-white.svg"
					alt="exit"
					className={clsx("cursor-pointer")}
				></img>
			)}
			<Typography variant={"span"}>{label}</Typography>
		</div>
	);
};

export default Chip;
