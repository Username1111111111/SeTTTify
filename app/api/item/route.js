import prisma from "@/lib/prisma";

async function handler(req) {
    if (req.method === "GET") {
        const searchParams = req.nextUrl.searchParams;
        const itemId = searchParams.get("itemId");

        try {
            const item = await prisma.item.findUnique({
                where: {
                    id: itemId,
                },
                include: {
                    tags: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    collection: {
                        select: {
                            custom_int1_state: true,
                            custom_int1_name: true,
                            custom_int2_state: true,
                            custom_int2_name: true,
                            custom_int3_state: true,
                            custom_int3_name: true,
                            custom_string1_state: true,
                            custom_string1_name: true,
                            custom_string2_state: true,
                            custom_string2_name: true,
                            custom_string3_state: true,
                            custom_string3_name: true,
                            custom_text1_state: true,
                            custom_text1_name: true,
                            custom_text2_state: true,
                            custom_text2_name: true,
                            custom_text3_state: true,
                            custom_text3_name: true,
                            custom_bool1_state: true,
                            custom_bool1_name: true,
                            custom_bool2_state: true,
                            custom_bool2_name: true,
                            custom_bool3_state: true,
                            custom_bool3_name: true,
                            custom_date1_state: true,
                            custom_date1_name: true,
                            custom_date2_state: true,
                            custom_date2_name: true,
                            custom_date3_state: true,
                            custom_date3_name: true,
                        },
                    },
                },
            });

            const resBody = JSON.stringify(item);

            const res = new Response(resBody, {
                status: 200,
                statusText: "Item have been fetched",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const resBody = JSON.stringify({ error: error.message });
            const res = new Response(resBody, {
                status: 500,
                statusText: `Failed to fetch item by itemId: ${collectionId}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res;
        }
    } else if (req.method === "POST") {
        const searchParams = req.nextUrl.searchParams;
        const itemData = await req.json();
        let { tags, ...itemFields } = itemData;

        // console.log(itemFields);
        
        for (const key in itemFields) {
            if (key.match(/custom_int.*_value/)) {
                if (itemFields[key] == "") {
                    itemFields[key] = null;
                } else {
                    itemFields[key] = +itemFields[key];
                }
                
            } else if (key.match(/custom_date.*_value/)) {
                if (itemFields[key] == "") {
                    itemFields[key] = null;
                }
            }
        }

        if (searchParams.has("collectionId")) {
            const collectionId = searchParams.get("collectionId");
            // This is create

            try {
                const userId = await prisma.collection.findUnique({
                    where: {
                        id: collectionId,
                    },
                    select: {
                        userId: true,
                    },
                });

                const userIdValue = userId.userId;
                console.log("userId:");
                console.log(userIdValue);
                

                const result = await prisma.$transaction(async (prisma) => {

                    const tagRecords = await Promise.all(
                        tags.map(async (tagName) => {

                            const tag = await prisma.tag.findUnique({
                                where: { name: tagName },
                            });

                            if (tag) {
                                return tag;
                            } else {
                                return prisma.tag.create({
                                    data: { name: tagName, userId: userIdValue },
                                });
                            }

                        })
                    );

                    console.log("tagRecords:");
                    console.log(tagRecords);

                    const item = await prisma.item.create({
                        data: {
                            ...itemFields,
                            collection: {
                                connect: { id: collectionId },
                            },
                            tags: {
                                connectOrCreate: 
                                tagRecords.map((tag) => ({
                                    where: { name: tag.name },
                                    create: { name: tag.name, userId: userIdValue },
                                })),
                            },
                            user: {
                                connect: { id: userIdValue },
                            },
                        },
                    });

                    return item;
                });

                const resBody = JSON.stringify(result);
                const res = new Response(resBody, {
                    status: 200,
                    statusText: `Created new item by collectionId: ${collectionId}`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;


            } catch (error) {
                const resBody = JSON.stringify({ error: error.message });
                const res = new Response(resBody, {
                    status: 500,
                    statusText: `Failed to create item by collectionId: ${collectionId}`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;
            }
        } else if (searchParams.has("itemId")) {
            const itemId = searchParams.get("itemId");
            // This is update

            try {
            } catch (error) {
                const resBody = JSON.stringify({ error: error.message });
                const res = new Response(resBody, {
                    status: 500,
                    statusText: `Failed to update item by itemId: ${itemId}`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;
            }
        }
    }
}
export { handler as GET, handler as POST };
