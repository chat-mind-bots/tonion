"use server";

import {getStoresMy} from "../../../../lib/store/getStoresMy";
import {getMyStores} from "@/shared/actions/store/getMyStores";
import MarketItem from "@/shared/components/market/item";
import {PrimaryButton} from "@/shared/components/core/button/primaryButton";
import Link from "next/link";


interface MyStoresProps {
    limit?: number
}

export const MyStores = async ({limit}: MyStoresProps) => {
    const stores = (await getMyStores(limit)) ?? [];

    const handleOnClick = async () => {
        await getMyStores();
    };
    return stores.length ? (
        <div className={"flex flex-col items-center"}>
            {stores.map((store) => (
                <div className={"w-full"} key={store.name}>
                    <MarketItem title={store.name} description={store.description} skills={store.skills.map((item)=> item.title)}/>
                </div>
            ))}
            {limit && <PrimaryButton>
                <Link href={"/store/list"}>Show more</Link>
            </PrimaryButton>}
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
