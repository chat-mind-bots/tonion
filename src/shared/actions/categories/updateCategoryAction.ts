"use server";

import { updateCategory } from "../../../../lib/categories/updateCategory";
import { z } from "zod";
import { CreateCategoryDto } from "../../../../lib/categories/creteCategory";
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

export const updateCategoryAction = async (
	id: string,
	formState: FormState,
	formData: FormData
) => {
	try {
		const validatedFields = schema.parse({
			name: formData.get("name"),
			description: formData.get("description"),
		});

		const data: Partial<CreateCategoryDto> = {
			name: validatedFields.name,
			description: validatedFields.description,
			parentId: (formData.get("parentId") as string) ?? null,
		};

		await updateCategory({
			id,
			...data,
			parentId: data.parentId === "-" ? null : data.parentId,
		});

		return toFormState("SUCCESS", "Category updated");
	} catch (error) {
		return fromErrorToFormState(error);
	}
};
