"use server";

import { Prisma } from "@prisma/client";
import prisma from "../prisma";
import {getSkillsByStoreId} from "./getSkillsByStoreId";

export const createSkills = async (
    skillDto: Prisma.SkillCreateManyInput[], storeID: string
) => {

    const skills = await prisma.skill.createMany({
       data: [...skillDto]
    });

    if (!skills) {
        throw "No skills found";
    }
    return getSkillsByStoreId(storeID);
};
