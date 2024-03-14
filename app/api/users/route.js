import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handler(req, res) {
    if (req.method === "GET") {
        try {

            const users = await prisma.user.findMany();

            const resBody = JSON.stringify(users);

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
    // else {
    //     res.setHeader("Allow", ["GET"]);
    //     res.status(405).end(`Method ${req.method} Not Allowed`);
    // }
}

export { handler as GET};