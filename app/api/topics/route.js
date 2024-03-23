import prisma from '@/lib/prisma';
import catchResponse from '@/lib/catchResponse';

async function handler(req) {
    if (req.method === "GET") {

        try {
            
            const topics = await prisma.topic.findMany({
                select: {
                    id: true,
                    name: true
                }
            });

            const resBody = JSON.stringify(topics);

            const res = new Response(resBody, {
                status: 200,
                statusText: "Topics have been fetched",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            return res;
        } catch (error) {
            const message = 'Failed to fetch topics.';
            const res = catchResponse(error, message)

            return res;
        }
    } 
}

export { handler as GET}; 