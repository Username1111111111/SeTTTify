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


//     {"error":"
//     Invalid `prisma.item.findMany()` invocation:
//     {
//           select: {
//             id: true,
//             name: true,
//             createdAt: true,
//             ~~~~~~~~~
//             collection: {
//               select: {
//                 name: true
//           }
//     },
//         user: {
//               select: {
//                 name: true
//           }
//     },
//     ?   userId?: true,
//     ?   collectionId?: true,
//     ?   custom_int1_value?: true,
//     ?   custom_int2_value?: true,
//     ?   custom_int3_value?: true,
//     ?   custom_string1_value?: true,
//     ?   custom_string2_value?: true,
//     ?   custom_string3_value?: true,
//     ?   custom_text1_value?: true,
//     ?   custom_text2_value?: true,
//     ?   custom_text3_value?: true,
//     ?   custom_bool1_value?: true,
//     ?   custom_bool2_value?: true,
//     ?   custom_bool3_value?: true,
//     ?   custom_date1_value?: true,
//     ?   custom_date2_value?: true,
//     ?   custom_date3_value?: true,
//     ?   tags?: true,
//     ?   comments?: true,
//     ?   likes?: true,
//     ?   _count?: true
//   },
//       take: 10
// }
    
//     Unknown field `createdAt` for select statement on model `Item`. Available options are marked with ?."}