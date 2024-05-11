"use server";

import { z, ZodError } from "zod";
import {
	CreateCategoryDto,
	creteCategory,
} from "../../../../lib/categories/creteCategory";
import {
	FormState,
	fromErrorToFormState,
	toFormState,
} from "@/utils/toFormState";

const schema = z.object({
	name: z.string().min(3, "Minimum length is 3 Symbols"),
	description: z.string(),
	parentId: z.string().optional(),
});
export const createCategoryAction = async (
	formState: FormState,
	formData: FormData
) => {
	try {
		const validatedFields = schema.parse({
			name: formData.get("name"),
			description: formData.get("description"),
			parentId: formData.get("parentId"),
		});

		const data: CreateCategoryDto = {
			name: "",
			description: "",
			parentId: "",
		};
		await creteCategory(data);

		return toFormState("SUCCESS", "Category created");
	} catch (error) {
		return fromErrorToFormState(error);
	}
};
