import prisma from '@/lib/prisma';

async function handler(req) {
    if (req.method === "GET") {

        const searchParams = req.nextUrl.searchParams;
        const collectionId = searchParams.get('collectionId')

        if (!collectionId || collectionId === null) {
            throw new Error(`No collectionId`);
        }

        try {
            
            const items = await prisma.item.findMany({
                where: {
                    collectionId: collectionId
                }, select: {
                    id: true,
                    name: true,
                }, include: {
                    tags: true
                }
                
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
            const resBody = JSON.stringify({error: error.message});
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
}

export { handler as GET}; 