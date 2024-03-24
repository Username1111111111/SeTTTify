import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function createUser(data) {
    const domain = getDomain();
    const url = `${domain}/api/user`

    const req = new Request(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const res = await fetch(req);
        const data = await res.json();

        if(res.status == 409) {
            
            const resBody = JSON.stringify({ message: "Email already used. Choose another."});
            
            const res = new Response(resBody, {
                status: 409,
                statusText: "Email already used. Choose another.",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        } else if (res.status == 201) {
            const resBody = JSON.stringify({ message: "User have been created"});
            
            const res = new Response(resBody, {
                status: 201,
                statusText: "User have been created",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res;
        }

        return data;
    } catch (error) {
        const message = "Failed to create user";
        const res = catchResponse(error, message);

        return res;
    }
}
