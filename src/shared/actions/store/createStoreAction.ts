"use server";
import { z } from "zod";

import { createStore } from "../../../../lib/store/createStore";

const schema = z.object({
	name: z.string().min(3, "Minimum length is 3 Symbols"),
	description: z.string(),
});

export const createStoreAction = async (prevState: any, formData: FormData) => {
	const validatedFields = schema.safeParse({
		name: formData.get("name"),
		description: formData.get("description"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const store = await createStore({
		name: formData.get("name") as string,
		description: formData.get("description") as string,
	});
	return {
		message: "Success!",
	};
};
