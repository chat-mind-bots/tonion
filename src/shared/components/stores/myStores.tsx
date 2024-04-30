"use server";

import { getStoresMy } from "../../../../lib/store/getStoresMy";
import { getMyStores } from "@/shared/actions/store/getMyStores";

export const MyStores = async () => {
	const stores = (await getMyStores()) ?? [];

	return stores.length ? (
		stores.map((store) => <div key={store.name}>{store.name}</div>)
	) : (
		<div>Empty list</div>
	);
};
