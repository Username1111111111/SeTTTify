import prisma from "@/lib/prisma";

async function handler(req) {
    if (req.method === "GET") {
        try {
            // TO BE FINISHED !!!
            const tags = await prisma.tag.findMany({
                take: 10,
                include: {
                    items: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    take: 5,
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
            const resBody = JSON.stringify({ error: error.message });

            const res = new Response(resBody, {
                status: 500,
                statusText: `Failed to fetch tags: ${error.message}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        }
    }
}

export { handler as GET };
