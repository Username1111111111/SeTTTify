import getDomain from "@/lib/getDomain";

export default async function getItemById(itemId) {
    const domain = getDomain();

    const req = new Request(
        `${domain}/api/item?itemId=${itemId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    try {
        const res = await fetch(req, {
            next: { revalidate: 60 },
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        
        return data;
    } catch (error) {
        const resBody = JSON.stringify({ error: error.message });
        const res = new Response(resBody, {
            status: 500,
            statusText: `Failed to fetch item by id: ${error.message}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res;
    }
}
