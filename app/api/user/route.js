import prisma from '@/lib/prisma';

async function handler(req, res) {
    if (req.method === "GET") {
        const searchParams = req.nextUrl.searchParams;
        const collectionId = searchParams.get('collectionId')

        try {

            const collection = await prisma.collection.findUnique({
                where: {
                    id: collectionId,
                },
                select: {
                    user: {
                        select: {
                            id: true,
                        },
                    },
                },
            });

            const resBody = JSON.stringify(collection.user.id);

            const res = new Response(resBody, {
                status: 200,
                statusText: "Users have fetched",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const res = new Response(resBody, {
                status: 500,
                statusText: "Failed to fetch users.",
                headers: {
                    "Content-Type": "application/json",
                },
            });        
            return res;
        }
    } 
}

export { handler as GET};