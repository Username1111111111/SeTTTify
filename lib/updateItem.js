import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function updateItem(itemId, data) {
    const domain = getDomain();
    const url = `${domain}/api/item?itemId=${itemId}`;

    const req = new Request(url, {
        method: "PUT",
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
        const message = `Failed to update item by itemId: ${itemId}`;
        const res = catchResponse(error, message);

        return res;
    }
}
