import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function handler(req) {
    if (req.method === "GET") {

        const searchParams = req.nextUrl.searchParams;
        const collectionId = searchParams.get('collectionId')

        if (!collectionId || collectionId === null) {
            throw new Error(`No collectionId`);
        }

        try {
            
            const collection = await prisma.collection.findUnique({
                where: {
                    id: collectionId
                },
                include: {
                    topic: true,
                },
            });

            const resBody = JSON.stringify(collection);

            const res = new Response(resBody, {
                status: 200,
                statusText: "Collection have been fetched",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            return res;
        } catch (error) {
            const res = new Response(resBody, {
                status: 500,
                statusText: `Failed to fetch collection: ${collectionId}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });        
            return res;
        }
    } 
}

export { handler as GET}; 