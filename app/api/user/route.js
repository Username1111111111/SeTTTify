import prisma from "@/lib/prisma";

async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const searchParams = req.nextUrl.searchParams;
            const collectionId = searchParams.get("collectionId");

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
                statusText: "User have been fetched",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const res = new Response(resBody, {
                status: 500,
                statusText: "Failed to fetch user.",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res;
        }
    }
}

export { handler as GET };
