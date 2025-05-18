import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import { ErrorMessage } from "@/shared/components/core/errorMessage";
import { Label } from "@/shared/components/core/label";

export interface InputProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	labelClassName?: string;
	errorMessages?: string[];
}
export const Textarea = ({
	label,
	labelClassName,
	errorMessages,
	...props
}: InputProps) => {
	return (
		<>
			<Label className={labelClassName} id={props.id}>
				{label}
			</Label>
			<textarea
				className={clsx(
					"bg-colors-telegram-header-bg border border-colors-telegram-button-background-secondary text-telegram-text text-sm rounded-lg focus:ring-colors-telegram-button-background focus:border-colors-telegram-button-background block w-full p-2.5",
					props.className
				)}
				{...props}
			></textarea>
			{errorMessages &&
				errorMessages.map((errorMessage) => (
					<ErrorMessage
						errorMessage={errorMessage}
						key={`err-${errorMessage}`}
					/>
				))}
		</>
	);
};
