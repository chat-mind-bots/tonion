"use server";
import {z, ZodError} from "zod";

import {createStore} from "../../../../lib/store/createStore";
import {createSkills} from "../../../../lib/store/createSkills";
import prisma from "../../../../lib/prisma";
import {FormState, fromErrorToFormState, toFormState} from "@/utils/toFormState";

const schema = z.object({
    name: z.string().min(3, "Minimum length is 3 Symbols"),
    description: z.string(),
    skills: z.string().min(3, "Maximum length is 3 Symbols").max(10, "Maximum length is 15 Symbols").array(),
});

export const createStoreAction = async (skills: string[], formState: FormState, formData: FormData) => {
    try {
        const validatedFields = schema.parse({
            name: formData.get("name"),
            description: formData.get("description"),
            skills: skills,
        });

        const store = await createStore({
            name: formData.get("name") as string,
            description: formData.get("description") as string,
        });
        if (validatedFields.data?.skills) {
            const skillsDto = validatedFields.data?.skills.map((skill: string) => ({
                title: skill,
                storeId: store.id
            }));
        const storeSkills = await createSkills([...skillsDto], store.id)
        }
    } catch (error) {
        return fromErrorToFormState(error)
    }

    return toFormState('SUCCESS', 'Store created');
};
