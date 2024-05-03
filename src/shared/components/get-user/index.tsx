"use server";

import { getUser } from "../../../../lib/user/get.user";

export const GetUser = async () => {
	const user = await getUser("12345");

	return <div>USER: {JSON.stringify(user)}</div>;
};
