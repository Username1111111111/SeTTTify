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
    }
}
export { handler as GET };
