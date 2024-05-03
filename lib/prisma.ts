import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare const global: {
    prisma?: PrismaClient;
};

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
        console.log(global.prisma)
    }
    prisma = global.prisma;
}

export default prisma;