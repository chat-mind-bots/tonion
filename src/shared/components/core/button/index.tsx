import React, { MouseEvent } from "react";
import clsx from "clsx";

type ButtonType = "submit" | "button";
export interface ButtonProps {
	type?: ButtonType;
	className?: string;
	children?: React.ReactNode | string;
	onClick?: () => void;
}
const Button = ({
	children,
	type = "button",
	className,
	onClick,
}: ButtonProps) => {
	return (
		<button type={type} className={clsx(className)} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
