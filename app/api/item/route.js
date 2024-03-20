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
                            name: true
                        }
                    }
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
