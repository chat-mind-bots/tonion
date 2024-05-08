"use server";
import {z} from "zod";

import {createStore} from "../../../../lib/store/createStore";
import {createSkills} from "../../../../lib/store/createSkills";
import prisma from "../../../../lib/prisma";

const schema = z.object({
    name: z.string().min(3, "Minimum length is 3 Symbols"),
    description: z.string(),
    skills: z.string().min(3, "Minimum length is 3 Symbols")
});

export const createStoreAction = async (prevState: any, formData: FormData) => {
    const validatedFields = schema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
        skills: formData.get("skills"),
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
    if (!store) {
        throw "No such store";
    }
    const skillsDto = validatedFields.data.skills.split(" ").map((skill: string) => ({
        title: skill,
        storeId: store.id
    }));
    const skills = await createSkills([...skillsDto], store.id)

    return {
        message: "Success!",
    };
};
