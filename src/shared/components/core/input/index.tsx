import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { ErrorMessage } from "@/shared/components/core/errorMessage";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	labelClassName?: string;
	errorMessages?: string[];
}
export const Input = ({
	label,
	labelClassName,
	errorMessages,
	...props
}: InputProps) => {
	return (
		<>
			{label && (
				<label
					htmlFor={props.id}
					className={clsx(
						"block mb-2 text-sm font-medium text-telegram-text",
						labelClassName
					)}
				>
					{label}
				</label>
			)}
			<input
				type="text"
				{...props}
				className={clsx(
					"bg-colors-telegram-header-bg border border-colors-telegram-button-background-secondary text-telegram-text text-sm rounded-lg focus:ring-colors-telegram-button-background focus:border-colors-telegram-button-background block w-full p-2.5",
					props.className
				)}
			/>
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
