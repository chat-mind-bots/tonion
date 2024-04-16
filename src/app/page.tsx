import AuthComponent from "@/shared/components/auth";
import { Suspense } from "react";
import Register from "@/shared/components/register";
import Layout from "@/shared/layout";
import MarketItem from "@/shared/components/market/item";
import Typography from "@/shared/components/core/typography";
import clsx from "clsx";

export default function Home() {
	return (
		<Layout className={"text-colors-telegram-accent-text h-viewport"}>
			<AuthComponent />
			<Typography variant={"h1"} className={clsx("top-2")}>
				testzxc
			</Typography>
			Market Item
			<MarketItem title={"test"} />
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<Suspense fallback={<div>DOWNLOADS</div>}>
				<Register />
			</Suspense>
		</Layout>
	);
}
