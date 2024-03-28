import prisma from "@/lib/prisma";
import catchResponse from "@/lib/catchResponse";

async function handler(req) {
    const searchParams = req.nextUrl.searchParams;
    if (req.method === "GET") {
        if (searchParams.has("all")) {
            // const all = searchParams.get("all");
            try {
                const tags = await prisma.tag.findMany({
                    select: {
                        name: true,
                    },
                });

                const resBody = JSON.stringify(tags);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "Tags have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const message = `Failed to fetch all tags`;
                const res = catchResponse(error, message);

                return res;
            }
        } else {
            try {
                const tags = await prisma.tag.findMany({
                    take: 10,
                    select: {
                        id: true,
                        name: true,
                        items: {
                            // orderBy: {
                            //     items: {
                            //         _count: "desc",
                            //     },
                            // },
                            select: {
                                id: true,
                                name: true,
                            },
                            take: 5,
                        },
                        _count: {
                            select: {
                                items: true,
                            },
                        },
                    },
                });

                const resBody = JSON.stringify(tags);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "Tags have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const message = `Failed to fetch some tags`;
                const res = catchResponse(error, message);

                return res;
            }
        }
    }
}

export { handler as GET };
