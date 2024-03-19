import prisma from "@/lib/prisma";

async function handler(req) {
    if (req.method === "GET") {
        const searchParams = req.nextUrl.searchParams;

        if (searchParams.has("collectionId")) {
            const collectionId = searchParams.get("collectionId");

            try {
                const items = await prisma.item.findMany({
                    where: {
                        collectionId: collectionId,
                    },
                    select: {
                        id: true,
                        name: true,
                        tags: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                });

                const resBody = JSON.stringify(items);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "Items have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const resBody = JSON.stringify({ error: error.message });
                const res = new Response(resBody, {
                    status: 500,
                    statusText: `Failed to fetch items: ${collectionId}`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;
            }
        }

        else if (searchParams.has("latest")) {
            const latestCount = +searchParams.get("latest");
            // https://www.prisma.io/docs/orm/reference/prisma-client-reference#filter-conditions-and-operators

            try {
                const items = await prisma.item.findMany({
                    take: latestCount,
                    select: {
                        id: true,
                        name: true,
                        collection: {
                            select: {
                                name: true,
                            },
                        },
                        user: {
                            select: {
                                name: true,
                            },
                        },
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                });

                const resBody = JSON.stringify(items);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "Latest items have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const resBody = JSON.stringify({ error: error.message });

                const res = new Response(resBody, {
                    status: 500,
                    statusText: `Failed to fetch latest items.`,
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
