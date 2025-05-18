import { checkAuth } from "./checkAuth";

export const checkAdmin = async () => {
	const user = await checkAuth();
	const adminAddress = await process.env.ADMIN_ADDRESS;

	return user.address === adminAddress;
};
