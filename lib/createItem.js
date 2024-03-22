import getDomain from "@/lib/getDomain";

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
        const resBody = JSON.stringify({ error: error.message });
        const res = new Response(resBody, {
            status: 500,
            statusText: `Failed to create item by id: ${error.message}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res;
    }
}
