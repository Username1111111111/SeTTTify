import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function deleteItem(itemId) {
    const domain = getDomain();
    const url = `${domain}/api/item?itemId=${itemId}`

    const req = new Request(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });

    try {
        const res = await fetch(req);
        const data = await res.json();

        const resBody = JSON.stringify(data);

        const newRes = new Response(resBody, {
            status: 200,
            statusText: "Item deleted",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return newRes;
    } catch (error) {
        const message = `Failed to delete item by itemId: ${itemId}`;
        const res = catchResponse(error, message);

        return res;
    }
}
