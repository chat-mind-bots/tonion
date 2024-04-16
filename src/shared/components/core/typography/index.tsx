import React from "react";
import clsx from "clsx";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
interface TypographyProps {
	variant?: TypographyVariant;
	children?: string;
	className?: string;
}
const Typography = ({
	variant = "div",
	children,
	className,
}: TypographyProps) => {
	return React.createElement(
		variant,
		{
			className: clsx(className),
		},
		children
	);
};

export default Typography;
