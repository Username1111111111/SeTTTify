import prisma from "@/lib/prisma";
import combItemFields from "@/lib/combItemFields";
import catchResponse from "@/lib/catchResponse";

async function handler(req) {
    const searchParams = req.nextUrl.searchParams;

    if (req.method === "GET") {
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
            const message = `Failed to fetch item by itemId: ${itemId}`;
            const res = catchResponse(error, message);

            return res;
        }
    } else if (req.method === "POST") {
        const itemData = await req.json();
        let { tags, ...itemFields } = itemData;

        combItemFields(itemFields);

        if (searchParams.has("collectionId")) {
            const collectionId = searchParams.get("collectionId");

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
                                    data: {
                                        name: tagName,
                                        userId: userIdValue,
                                    },
                                });
                            }
                        })
                    );

                    const item = await prisma.item.create({
                        data: {
                            ...itemFields,
                            collection: {
                                connect: { id: collectionId },
                            },
                            tags: {
                                connectOrCreate: tagRecords.map((tag) => ({
                                    where: { name: tag.name },
                                    create: {
                                        name: tag.name,
                                        userId: userIdValue,
                                    },
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
                const message = `Failed to create item by collectionId: ${collectionId}`;
                const res = catchResponse(error, message);

                return res;
            }
        }
    } else if (req.method === "DELETE") {
        const itemId = searchParams.get("itemId");

        try {
            const deletedItem = await prisma.item.delete({
                where: {
                    id: itemId,
                },
            });

            const resBody = JSON.stringify(deletedItem);
            const res = new Response(resBody, {
                status: 200,
                statusText: `Item with ID ${itemId} has been deleted successfully`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res;
        } catch (error) {
            const message = `Failed to delete item with ID: ${itemId}`;
            const res = catchResponse(error, message);

            return res;
        }
    } else if (req.method === "PUT") {
        const itemId = searchParams.get("itemId");
        const newItemData = await req.json();
        let { tags, ...itemFields } = newItemData;

        combItemFields(itemFields);

        try {
            const userId = await prisma.item.findUnique({
                where: {
                    id: itemId,
                },
                select: {
                    userId: true,
                },
            });

            const userIdValue = userId.userId;

            console.log("userIdValue");
            console.log(userIdValue);

            const currentItem = await prisma.item.findUnique({
                where: { id: itemId },
                include: { tags: true },
            });

            const tagsToDisconnect = currentItem.tags
                .filter((tag) => !tags.includes(tag.name))
                .map((tag) => ({ id: tag.id }));

            const tagsToConnect = tags
                .filter(
                    (tagName) =>
                        !currentItem.tags.some((tag) => tag.name === tagName)
                )
                .map((tagName) => ({ name: tagName }));

            const updatedItem = await prisma.item.update({
                where: { id: itemId },
                data: {
                    ...itemFields,
                    tags: {
                        disconnect: tagsToDisconnect,
                        connectOrCreate: tagsToConnect.map((tag) => ({
                            where: { name: tag.name, userId: userIdValue },
                            create: { name: tag.name, userId: userIdValue },
                        })),
                    },
                },
                include: { tags: true },
            });

            const resBody = JSON.stringify(updatedItem);
            const res = new Response(resBody, {
                status: 200,
                statusText: `Item with ID ${itemId} has been updated successfully`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res;
        } catch (error) {
            const message = `Failed to update item with ID: ${itemId}`;
            const res = catchResponse(error, message);

            return res;
        }
    }
}
export { handler as GET, handler as POST, handler as DELETE, handler as PUT };
