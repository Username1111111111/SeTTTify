import prisma from "@/lib/prisma";

async function handler(req, res) {
    if (req.method === "GET") {
        const searchParams = req.nextUrl.searchParams;

        if (searchParams.has("collectionId")) {
            const collectionId = searchParams.get("collectionId");

            try {
                const collection = await prisma.collection.findUnique({
                    where: {
                        id: collectionId,
                    },
                    select: {
                        userId: true,
                    },
                });

                const resBody = JSON.stringify(collection.userId);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "User by collectionId have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const resBody = JSON.stringify({ error: error });
                const res = new Response(resBody, {
                    status: 500,
                    statusText: "Failed to fetch user at api/user.",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;
            }
        }

        if (searchParams.has("itemId")) {
            const itemId = searchParams.get("itemId");

            try {
                const item = await prisma.item.findUnique({
                    where: {
                        id: itemId,
                    },
                    select: {
                        userId: true,
                    },
                });

                const resBody = JSON.stringify(item.userId);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "User by itemId have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const resBody = JSON.stringify({ error: error });

                const res = new Response(resBody, {
                    status: 500,
                    statusText: "Failed to fetch user at api/user.",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;
            }
        }
    }
}

export { handler as GET };
