import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function createItem(collectionId, data) {
    const domain = getDomain();
    const url = `${domain}/api/item?collectionId=${collectionId}`

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
        const message = "Failed to create item by id";
        const res = catchResponse(error, message);

        return res;
    }
}