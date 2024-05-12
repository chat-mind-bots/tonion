import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export const TreeViewList: FC<PropsWithChildren> = ({ children }) => {
	return <div className={clsx("flex", "flex-col", "gap-2")}>{children}</div>;
};
