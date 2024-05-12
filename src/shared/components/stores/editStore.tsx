"use server";
import React from "react";
import { getStoreByIdAction } from "@/shared/actions/store/getStoreBuyId";
import { useFormStatus } from "react-dom";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import { EditStoreClient } from "@/shared/components/stores/editStoreClient";

interface EditStoreProps {
	id: string;
}

export const EditStore = async ({ id }: EditStoreProps) => {
	const store = await getStoreByIdAction(id);
	// @ts-ignore
	return store ? <EditStoreClient store={store} /> : null;
};
