import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function createCollection(userId, data) {
    const domain = getDomain();
    const url = `${domain}/api/collection?userId=${userId}`

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

        const resBody = JSON.stringify(data);

        const newRes = new Response(resBody, {
            status: 200,
            statusText: "Collection created",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return newRes;
    } catch (error) {
        const message = "Failed to create collection by userId";
        const res = catchResponse(error, message);

        return res;
    }
}
