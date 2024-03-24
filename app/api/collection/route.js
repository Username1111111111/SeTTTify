import prisma from "@/lib/prisma";
import catchResponse from "@/lib/catchResponse";

async function handler(req) {
    const searchParams = req.nextUrl.searchParams;

    if (req.method === "GET") {
        const collectionId = searchParams.get("collectionId");

        try {
            let collection;
            // console.log(searchParams)

            if (searchParams.has("getState")) {
                collection = await prisma.collection.findUnique({
                    where: {
                        id: collectionId,
                    },
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
                });
            } else {
                collection = await prisma.collection.findUnique({
                    where: {
                        id: collectionId,
                    },
                    include: {
                        topic: true,
                    },
                });
            }

            const resBody = JSON.stringify(collection);

            const res = new Response(resBody, {
                status: 200,
                statusText: "Collection have been fetched",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const message = `Failed to fetch collection: ${collectionId}`;
            const res = catchResponse(error, message);

            return res;
        }
    } else if (req.method == "POST") {
        const userId = searchParams.get("userId");
        const collectionData = await req.json();
        const { name, description, imageUrl, topicId, ...customFields } =
            collectionData;

        try {
            const collection = await prisma.collection.create({
                data: {
                    name: name,
                    description: description,
                    imageUrl: imageUrl,
                    ...customFields,
                    user: {
                        connect: { id: userId },
                    },
                    topic: {
                        connect: { id: topicId },
                    },
                },
            });

            const resBody = JSON.stringify(collection);
            const res = new Response(resBody, {
                status: 200,
                statusText: `Created new collection by userId: ${userId}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const message = `Failed to create collection by userId: ${userId}`;
            const res = catchResponse(error, message);

            return res;
        }
    } else if (req.method == "DELETE") {
        const collectionId = searchParams.get("collectionId");

        try {
            const deletedCollection = await prisma.collection.delete({
                where: {
                    id: collectionId,
                },
            });

            const resBody = JSON.stringify(deletedCollection);
            const res = new Response(resBody, {
                status: 200,
                statusText: `Collection has been deleted successfully: ${collectionId}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res;
        } catch (error) {
            const message = `Failed to delete collection: ${collectionId}`;
            const res = catchResponse(error, message);

            return res;
        }
    } else if (req.method == "PUT") {
    }
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
