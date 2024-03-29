import getDomain from "@/lib/getDomain";

export default async function getUserByItemId(itemId) {
    const domain = getDomain();

    const req = new Request(`${domain}/api/user?itemId=${itemId}`, {
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
        console.error('Error fetching user by item ID:', error);
        throw error;
    }
}
