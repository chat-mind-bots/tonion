import prisma from "../prisma";

export const getSkillsByStoreId = (id: string) => {
    return prisma.skill.findMany({ where: { storeId: id } });
};
