import { ReactNode } from "react";
import clsx from "clsx";

export const ContentBlock = ({
	children,
	isBorderBottom,
	isBorderTop,
	className,
}: {
	children: ReactNode;
	isBorderTop?: boolean;
	isBorderBottom?: boolean;
	className?: string;
}) => {
	return (
		<div
			className={clsx(
				"p-4",
				{
					"border-t-2": isBorderTop,
					"border-b-2": isBorderBottom,
					"border-colors-telegram-hint": isBorderTop || isBorderBottom,
				},
				className
			)}
		>
			{children}
		</div>
	);
};
