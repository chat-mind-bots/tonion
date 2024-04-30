import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ReactNode } from "react";

export interface NavigationLinkProps {
	href: string;
	icon: ReactNode;
	displayName: string;
	alt: string;
	isDisabled?: boolean;
}

export const NavigationLink = ({
	href,
	icon,
	displayName,
	isDisabled,
}: NavigationLinkProps) => {
	const pathname = usePathname();

	return (
		<li key={href}>
			<Link
				href={href}
				className={clsx("flex flex-col justify-center items-center", {
					"text-telegram-text": pathname !== href,
					"text-telegram-link": pathname === href,
					"text-telegram-hint": isDisabled,
					"cursor-not-allowed": isDisabled,
					"pointer-events-none": isDisabled,
				})}
			>
				{icon}
				<p>{displayName}</p>
			</Link>
		</li>
	);
};
