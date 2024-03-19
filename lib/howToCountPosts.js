import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = await prisma.user.findMany({
    orderBy: {
        posts: {
            _count: "desc",
        },
    },
    select: {
        id: true,
        name: true,
        posts: {
            select: {
                _count: true,
            },
        },
        _count: {
            select: {
                posts: true,
            },
        },
    },
    take: 4,
});

console.log(users);

// node /code/index.js
// [
//   {
//     id: 2,
//     name: 'Alex Ruheni',
//     posts: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
//     _count: { posts: 6 }
//   },
//   {
//     id: 1,
//     name: 'Sonia Lomo',
//     posts: [ [Object], [Object] ],
//     _count: { posts: 2 }
//   },
//   {
//     id: 4,
//     name: 'Ada Lovelace',
//     posts: [ [Object], [Object] ],
//     _count: { posts: 2 }
//   },
//   { id: 3, name: 'Nilu Bava', posts: [], _count: { posts: 0 } }
// ]
