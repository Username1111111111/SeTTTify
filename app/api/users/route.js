import prisma from '@/lib/prisma';

async function handler(req, res) {
    if (req.method === "GET") {
        try {

            const users = await prisma.user.findMany();

            const resBody = JSON.stringify(users);

            const res = new Response(resBody, {
                status: 200,
                statusText: "Users have been fetched",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const resBody = JSON.stringify({error: error});
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