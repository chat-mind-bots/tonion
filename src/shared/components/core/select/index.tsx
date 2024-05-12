import { SelectHTMLAttributes } from "react";
import clsx from "clsx";
import { Label } from "@/shared/components/core/label";

export interface IOption {
	value: string | number | null;
	displayValue: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: IOption[];
	label?: string;
	labelClassName?: string;
	errorMessages?: string[];
}

export const Select = ({
	label,
	labelClassName,
	errorMessages,
	options,
	...props
}: SelectProps) => {
	return (
		<>
			<Label className={labelClassName} id={props.id}>
				{label}
			</Label>
			<select
				{...props}
				className={clsx(
					"bg-colors-telegram-header-bg",
					"block",
					"py-2.5",
					"px-0",
					"pl-2.5",
					"w-full",
					"text-sm",
					"text-telegram-text",
					"bg-transparent",
					"border-0",
					"border-b-2",
					"border-colors-telegram-button-background-secondary",
					"appearance-none",
					"focus:outline-none",
					"focus:ring-0",
					"focus:border-colors-telegram-button-background",
					props.className
				)}
			>
				{options.map((option) => (
					<option
						value={option.value ?? undefined}
						key={`option-${option.value}`}
					>
						{option.displayValue}
					</option>
				))}
			</select>
		</>
	);
};
