import prisma from '@/lib/prisma';


async function handler(req) {
    if (req.method === "GET") {

        const searchParams = req.nextUrl.searchParams;
        const topicId = searchParams.get('topicId')

        if (!topicId || topicId === null) {
            throw new Error(`No topicId`);
        }

        try {
            
            const topic = await prisma.topic.findUnique({
                where: {
                    id: topicId
                }
            });

            const resBody = JSON.stringify(topic);

            const res = new Response(resBody, {
                status: 200,
                statusText: "topic have been fetched",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            return res;
        } catch (error) {
            const res = new Response(resBody, {
                status: 500,
                statusText: `Failed to fetch topic: ${topicId}`,
                headers: {
                    "Content-Type": "application/json",
                },
            });        
            return res;
        }
    } 
}

export { handler as GET}; 