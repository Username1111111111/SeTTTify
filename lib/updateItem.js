import getDomain from "@/lib/getDomain";

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
        const resBody = JSON.stringify({ error: error.message });
        const res = new Response(resBody, {
            status: 500,
            statusText: `Failed to update item by id: ${error.message}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res;
    }
}
