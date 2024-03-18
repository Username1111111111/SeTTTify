import prisma from "@/lib/prisma";

async function handler(req, res) {
    if (req.method === "GET") {
        const searchParams = req.nextUrl.searchParams;
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
            // res.status(200).json(collections);

        } catch (error) {
            const resBody = JSON.stringify({ error: error.message });

            const res = new Response(resBody, {
                status: 500,
                statusText: `Epic Failed to fetch Collections: ${error.message}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res;
        }
    }
}

export { handler as GET };
