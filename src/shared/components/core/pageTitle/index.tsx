import Typography from "@/shared/components/core/typography";
import { ReactNode } from "react";
import clsx from "clsx";

export const PageTitle = ({
	title,
	actions,
	className,
}: {
	title: string;
	actions?: ReactNode;
	className?: string;
}) => {
	return (
		<div className={clsx("flex justify-between", className)}>
			<Typography variant={"h2"} className={"text-telegram-text"}>
				{title}
			</Typography>
			{actions}
		</div>
	);
};
