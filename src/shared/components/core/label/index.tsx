import { LabelHTMLAttributes } from "react";
import clsx from "clsx";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...props }: LabelProps) => {
	return children ? (
		<label
			htmlFor={props.id}
			className={clsx(
				"block mb-2 text-sm font-medium text-telegram-text",
				props.className
			)}
		>
			{children}
		</label>
	) : null;
};
