import clsx from "clsx";
import AuthComponent from "@/shared/components/auth";

export const Header = () => {
	return (
		<header className={clsx("flex justify-between items-center")}>
			<div>Logo in future</div>
			<AuthComponent />
		</header>
	);
};
