import prisma from "@/lib/prisma";

async function handler(req) {
    if (req.method === "GET") {
        const searchParams = req.nextUrl.searchParams;
        const collectionId = searchParams.get("collectionId");

        try {
            let collection;

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
            const resBody = JSON.stringify({ error: error });
            const res = new Response(resBody, {
                status: 500,
                statusText: `Failed to fetch collection: ${collectionId}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res;
        }
    }
}

export { handler as GET };
