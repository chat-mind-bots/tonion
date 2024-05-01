"use server";

import { updateOrCreateSession } from "@/shared/actions/session/updateOrCreateSession";

export const updateOrCreateSessionAction = async (props: {
	userId: string;
	expiredAt: Date;
}) => {
	return updateOrCreateSession({ ...props });
};
