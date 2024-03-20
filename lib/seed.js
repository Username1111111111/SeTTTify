const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

async function main() {
    const password = "demoPassword";
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name: "Demo User",
            email: "demo@example.com",
            password: hashedPassword,
            blocked: false,
            admin: false,
        },
    });

    const collection = await prisma.collection.create({
        data: {
            name: "Demo Collection",
            description: "This is a demo collection",
            topic: {
                create: { name: "Demo Topic" },
            },
            user: {
                connect: { id: user.id },
            },
        },
    });

    const item = await prisma.item.create({
        data: {
            name: "Demo Item",
            collection: {
                connect: { id: collection.id },
            },
            user: {
                connect: { id: user.id },
            },
        },
    });

    // console.log({ user, collection, item });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
