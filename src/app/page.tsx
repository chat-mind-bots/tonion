import AuthComponent from "@/shared/components/auth";
import { Suspense } from "react";
import Register from "@/shared/components/register";
import Layout from "@/shared/layout";
import MarketItem from "@/shared/components/market/item";
import Typography from "@/shared/components/core/typography";
import clsx from "clsx";
import { GetUser } from "@/shared/components/get-user";

export default function Home() {
	return (
		<Layout className={"text-colors-telegram-text h-viewport"}>
			<AuthComponent />
			Market Items
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<Suspense fallback={<div>DOWNLOADS</div>}>
				<Register />
			</Suspense>
			<Suspense fallback={<div>User Download</div>}>
				<GetUser />
			</Suspense>
		</Layout>
	);
}
