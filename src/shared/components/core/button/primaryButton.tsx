import Button, { ButtonProps } from "@/shared/components/core/button";
import clsx from "clsx";

export const PrimaryButton = (props: ButtonProps) => {
	return (
		<Button
			{...props}
			className={clsx(
				"py-2",
				"px-4",
				"rounded-full",
				"bg-colors-telegram-button-background",
				"text-telegram-button-text",
				"text-sm",
				props.className
			)}
		/>
	);
};
