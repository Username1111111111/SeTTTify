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

        return data;
    } catch (error) {
        const message = "Failed to create collection by userId";
        const res = catchResponse(error, message);

        return res;
    }
}
