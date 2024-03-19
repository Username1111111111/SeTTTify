import prisma from "@/lib/prisma";

async function handler(req, res) {
    if (req.method === "GET") {
        const searchParams = req.nextUrl.searchParams;

        if (searchParams.has("userId")) {
            const userId = searchParams.get("userId");

            if (!userId || userId === null) {
                const res = new Response({
                    status: 400,
                    statusText: "No userId provided",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            }

            try {
                const collections = await prisma.collection.findMany({
                    where: {
                        userId: userId,
                    },
                    select: {
                        id: true,
                        name: true,
                    },
                });

                const resBody = JSON.stringify(collections);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "Collections have fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const resBody = JSON.stringify({ error: error.message });

                const res = new Response(resBody, {
                    status: 500,
                    statusText: `Failed to fetch Collections by userId: ${error.message}`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;
            }
        } else if (searchParams.has("largest")) {
            const largestCount = +searchParams.get("largest");

            if (!largestCount || largestCount === null) {
                const res = new Response({
                    status: 400,
                    statusText: "No largestCount provided",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            }

            try {
                const collections = await prisma.collection.findMany({
                    orderBy: {
                        items: {
                            _count: "desc",
                        },
                    },
                    select: {
                        id: true,
                        name: true,
                        items: {
                            _count: true
                        }
                    },
                    take: largestCount,
                });
                

                const itemCount = await prisma.item.count({
                    where: {
                        collection: {
                            some: {
                                id: {
                                    in: collections.map(
                                        (collection) => collection.id
                                    ),
                                },
                            },
                        },
                    },
                });

                const collectionsWithItemCount = collections.map(
                    (collection) => {
                        return {
                            id: collection.id,
                            name: collection.name,
                            itemCount: itemCount,
                        };
                    }
                );

                const resBody = JSON.stringify(collectionsWithItemCount);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "Collections have fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const resBody = JSON.stringify({ error: error.message });

                const res = new Response(resBody, {
                    status: 500,
                    statusText: `Failed to fetch largest collections: ${error.message}`,
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
