import React from "react";
import clsx from "clsx";
interface Layout {
	children: React.ReactNode;
	className?: string;
}
const Layout = ({ children, className }: Layout) => {
	return <div className={clsx(className)}>{children}</div>;
};

export default Layout;
