import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function handler(req) {
    if (req.method === "GET") {

        const searchParams = req.nextUrl.searchParams;
        console.log(`searchParams Route handler =====> ${searchParams}`)
        const userId = searchParams.get('userId')

        console.log(`userId Route handler =====> ${userId}`)

        if (!userId || userId === null) {
            throw new Error(`No userId`);
        }


        try {
            
            const collections = await prisma.collection.findMany({
                where: {
                    userId: userId
                }
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
            const res = new Response(resBody, {
                status: 500,
                statusText: `Epic Failed to fetch Collections: ${userId}. ${error}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });        
            return res;
        }
    } 
}

export { handler as GET}; 