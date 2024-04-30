import clsx from "clsx";
import AuthComponent from "@/shared/components/auth";
import { DynamicPng } from "@/shared/components/core/image/dynamic-png";

export const Header = () => {
	return (
		<header className={clsx("flex justify-between items-center p-4 ")}>
			<DynamicPng
				name={"logo"}
				alt={"logo"}
				width={50}
				height={50}
				className={"rounded-md"}
			/>
			<AuthComponent />
		</header>
	);
};
