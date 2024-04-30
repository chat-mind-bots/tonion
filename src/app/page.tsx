import AuthComponent from "@/shared/components/auth";
import Layout from "@/shared/layout";
import MarketItem from "@/shared/components/market/item";

export default function Home() {
	return (
		<Layout className={"text-colors-telegram-text"}>
			<AuthComponent />
			Market Items
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		</Layout>
	);
}
