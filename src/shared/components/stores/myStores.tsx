"use server";

import { getStoresMy } from "../../../../lib/store/getStoresMy";
import { getMyStores } from "@/shared/actions/store/getMyStores";
import MarketItem from "@/shared/components/market/item";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";

const BASE_LIMIT_STORES = 3;

export const MyStores = async () => {
	const stores = (await getMyStores(BASE_LIMIT_STORES)) ?? [];

	const handleOnClick = async () => {
		await getMyStores();
	};
	return stores.length ? (
		<div className={"flex flex-col items-center"}>
			{stores.map((store) => (
				<div className={"w-full"} key={store.name}>
					<MarketItem title={store.name} description={store.description} />
				</div>
			))}
			<PrimaryButton>Show more</PrimaryButton>
		</div>
	) : (
		<div>Empty list</div>
		// <div className={"flex flex-col items-center"}>
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<MarketItem title={"test"} description={"Покупай DUREV сука"} />
		// 	<div className={"m-auto"}>
		// 		<PrimaryButton>Show more</PrimaryButton>
		// 	</div>
		// </div>
	);
};
