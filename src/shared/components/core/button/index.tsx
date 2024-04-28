import React from "react";
import clsx from "clsx";

type ButtonType = "submit" | "button";
interface ButtonProps {
	type?: ButtonType;
	className?: string;
	children?: React.ReactNode | string;
}
const Button = ({ children, type = "button", className }: ButtonProps) => {
	return (
		<button type={type} className={clsx(className)}>
			{children}
		</button>
	);
};

export default Button;
