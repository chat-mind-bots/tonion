"use server";
import { z } from "zod";

import { createStore } from "../../../../lib/store/createStore";
import { createSkills } from "../../../../lib/store/createSkills";
import {
	FormState,
	fromErrorToFormState,
	toFormState,
} from "@/utils/toFormState";
import { editStore } from "../../../../lib/store/editStore";

const schema = z.object({
	name: z.string().min(3, "Minimum length is 3 Symbols"),
	description: z.string(),
	skills: z.array(z.string()).min(1, "Enter at least 1 skill"),
});

export const editStoreAction = async (
	id: string,
	skills: string[],
	formState: FormState,
	formData: FormData
) => {
	console.log(formState);
	try {
		const validatedFields = schema.parse({
			name: formData.get("name"),
			description: formData.get("description"),
			skills: skills,
		});

		const store = await editStore({
			id,
			name: formData.get("name") as string,
			description: formData.get("description") as string,
		});

		if (validatedFields.skills) {
			const skillsDto = validatedFields.skills.map((skill: string) => ({
				title: skill,
				storeId: id,
			}));
			const storeSkills = await createSkills([...skillsDto], id);
		}
	} catch (error) {
		return fromErrorToFormState(error);
	}

	return toFormState("SUCCESS", "Store edited");
};
