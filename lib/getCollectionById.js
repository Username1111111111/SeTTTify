import getDomain from "@/lib/getDomain";

export default async function getCollectionById(collectionId) {
    const domain = getDomain();

    const req = new Request(
        `${domain}/api/collection?collectionId=${collectionId}`,
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
        console.error("Error fetching items:", error);
        return [];
    }
}
