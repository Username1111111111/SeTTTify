import prisma from "@/lib/prisma";
import catchResponse from "@/lib/catchResponse";
import hashPassword from "@/lib/hashPassword";

async function handler(req, res) {
    if (req.method === "GET") {
        const searchParams = req.nextUrl.searchParams;

        if (searchParams.has("collectionId")) {
            const collectionId = searchParams.get("collectionId");

            try {
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
                    statusText: "User by collectionId have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const message = `Failed to fetch user by collectionId: ${collectionId}`;
                const res = catchResponse(error, message);

                return res;
            }
        } else if (searchParams.has("itemId")) {
            const itemId = searchParams.get("itemId");

            try {
                const item = await prisma.item.findUnique({
                    where: {
                        id: itemId,
                    },
                    select: {
                        userId: true,
                    },
                });

                const resBody = JSON.stringify(item.userId);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "User by itemId have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            } catch (error) {
                const message = `Failed to fetch user by itemId: ${itemId}`;
                const res = catchResponse(error, message);

                return res;
            }
        } else if (searchParams.has("email")) {
            const email = searchParams.get("email");

            const user = await prisma.user.findUnique({
                where: {
                    email: email,
                },
                select: {
                    name: true,
                    email: true,
                    password: true,
                    blocked: true,
                    admin: true,
                },
            });

            if (user) {
                const resBody = JSON.stringify(user);

                const res = new Response(resBody, {
                    status: 200,
                    statusText: "User by itemId have been fetched",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;
            } else {
                const resBody = JSON.stringify("No user have been found");

                const res = new Response(resBody, {
                    status: 404,
                    statusText: "No user have been found",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                return res;
            }
        }
    } else if (req.method === "POST") {
        const data = await req.json();
        const { name, email, password } = data;

        try {
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });

            if (existingUser) {
                const resBody = JSON.stringify(`Email already exists ${email}`);

                const res = new Response(resBody, {
                    status: 409,
                    statusText: "Email already used. Choose another.",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return res;
            }

            const hashedPassword = await hashPassword(password);

            const user = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: hashedPassword,
                    blocked: false,
                    admin: false,
                },
            });

            const resBody = JSON.stringify(user);

            const res = new Response(resBody, {
                status: 201,
                statusText: "User have been created!",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const message = `Failed to create user`;
            const res = catchResponse(error, message);

            return res;
        }
    }
}

export { handler as GET, handler as POST };
