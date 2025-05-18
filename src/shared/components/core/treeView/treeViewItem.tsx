"use client";

import { FC, PropsWithChildren, ReactNode, useState } from "react";
import { ArrowIcon } from "@/shared/components/core/icons/arrow.icon";
import clsx from "clsx";

interface TreeViewItemProps {
	itemId: string;
	label: ReactNode;
	initialState?: boolean;
}

export const TreeViewItem: FC<PropsWithChildren<TreeViewItemProps>> = ({
	label,
	children,
	initialState,
}) => {
	const [isOpen, setIsOpen] = useState(!!initialState);

	const openHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={clsx("flex", "flex-col", "gap-2", "pl-4", "cursor-pointer")}
		>
			<div className={clsx("flex", "gap-2")} onClick={openHandler}>
				{!!children && (
					<ArrowIcon
						className={clsx("fill-telegram-text", "max-w-5", "w-full", {
							"rotate-180": isOpen,
						})}
					/>
				)}
				<p
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					{label}
				</p>
			</div>
			{isOpen && !!children && children}
		</div>
	);
};
