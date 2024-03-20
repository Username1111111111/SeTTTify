import getDomain from "@/lib/getDomain";

export default async function getItemsLatest(latestCount) {
    const domain = getDomain();

    const req = new Request(`${domain}/api/items?latest=${latestCount}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

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
            statusText: `Failed to fetch latest items: ${error.message}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res;
    }
}
