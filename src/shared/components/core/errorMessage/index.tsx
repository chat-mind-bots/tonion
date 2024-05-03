import clsx from "clsx";

export const ErrorMessage = ({
	errorMessage,
	className,
}: {
	errorMessage?: string;
	className?: string;
}) => {
	return errorMessage ? (
		<p
			className={clsx(
				"block mt-2 text-sm font-medium text-telegram-destructive-text",
				className
			)}
		>
			{errorMessage}
		</p>
	) : null;
};
