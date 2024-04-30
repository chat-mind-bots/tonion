import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ReactNode } from "react";

export interface NavigationLinkProps {
	href: string;
	icon: ReactNode;
	displayName: string;
	alt: string;
}

export const NavigationLink = ({
	href,
	icon,
	displayName,
}: NavigationLinkProps) => {
	const pathname = usePathname();

	return (
		<li>
			<Link
				href={href}
				className={clsx("flex flex-col justify-center items-center", {
					"text-telegram-text": pathname === href,
					"text-telegram-link": pathname !== href,
				})}
			>
				{icon}
				<p>{displayName}</p>
			</Link>
		</li>
	);
};
