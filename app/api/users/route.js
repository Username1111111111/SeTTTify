import prisma from "@/lib/prisma";
import catchResponse from "@/lib/catchResponse";

async function handler(req, res) {
    const searchParams = req.nextUrl.searchParams;
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
            const message = `Failed to fetch users`;
            const res = catchResponse(error, message);

            return res;
        }
    } else if (req.method === "PUT") {
        const userIds = await req.json();
        console.log(userIds);

        // if (!Array.isArray(userIds) || userIds.length === 0) {
        //     return res.status(400).json({ error: "Invalid user IDs" });
        // }

        if (searchParams.has("block")) {
            const block = +searchParams.get("block");

            if (block === 1) {
                try {
                    const blockedUsers = await prisma.user.updateMany({
                        where: { id: { in: userIds } },
                        data: { blocked: true },
                    });
    
                    const resBody = JSON.stringify(blockedUsers);
    
                    const res = new Response(resBody, {
                        status: 200,
                        statusText: "Users have been blocked",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    return res;
                } catch (error) {
                    const message = `Failed to block users`;
                    const res = catchResponse(error, message);

                    return res;
                }                
            } else if (block === 0) {
                try {
                    const unblockedUsers = await prisma.user.updateMany({
                        where: { id: { in: userIds } },
                        data: { blocked: false },
                    });
    
                    const resBody = JSON.stringify(unblockedUsers);
    
                    const res = new Response(resBody, {
                        status: 200,
                        statusText: "Users have been unblocked",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    return res;
                } catch (error) {
                    const message = `Failed to unblock users`;
                    const res = catchResponse(error, message);

                    return res;
                }         
            }
        } else if (searchParams.has("admin")) {
            const admin = +searchParams.get("admin");

            if (admin === 1) {
                try {
                    const adminUsers = await prisma.user.updateMany({
                        where: { id: { in: userIds } },
                        data: { admin: true },
                    });
    
                    const resBody = JSON.stringify(adminUsers);
    
                    const res = new Response(resBody, {
                        status: 200,
                        statusText: "Users have been promoted admins",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    return res;
                } catch (error) {
                    const message = `Failed to promote admin users`;
                    const res = catchResponse(error, message);

                    return res;
                }        

            } else if (admin === 0) {
                try {
                    const deadminUsers = await prisma.user.updateMany({
                        where: { id: { in: userIds } },
                        data: { admin: false },
                    });
    
                    const resBody = JSON.stringify(deadminUsers);
    
                    const res = new Response(resBody, {
                        status: 200,
                        statusText: "Users have been removed from admins",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    return res;
                } catch (error) {
                    const message = `Failed to remove admin role from users`;
                    const res = catchResponse(error, message);

                    return res;
                }        
            }
        }
    } else if (req.method === "DELETE") {
        const userIds = await req.json();

        try {
            const deletedUsers = await prisma.user.deleteMany({
                where: { id: { in: userIds } }
            });

            const resBody = JSON.stringify(deletedUsers);

            const res = new Response(resBody, {
                status: 200,
                statusText: "Users have been deleted",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } catch (error) {
            const message = `Failed to delete users`;
            const res = catchResponse(error, message);

            return res;
        }         
    }
}

export { handler as GET, handler as PUT, handler as DELETE };
