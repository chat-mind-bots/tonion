import AuthComponent from "@/shared/components/auth";
import MarketItem from "@/shared/components/market/item";

export default function Home() {
	return (
		<>
			<AuthComponent />
			Market Items
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
			<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		</>
	);
}
