import React, { ReactNode } from "react";
import clsx from "clsx";

type TypographyVariant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "div"
	| "span";

interface TypographyProps {
	variant?: TypographyVariant;
	bold?: boolean;
	children?: ReactNode;
	className?: string;
}
const Typography = ({
	variant = "div",
	bold = false,
	children,
	className,
	...others
}: TypographyProps) => {
	return React.createElement(
		variant,
		{
			className: clsx(className, { "font-bold": bold }),
			...others,
		},
		children
	);
};

export default Typography;
