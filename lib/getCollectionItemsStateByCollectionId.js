import getDomain from "@/lib/getDomain";

export default async function getCollectionItemsStateByCollectionId(collectionId) {
    const domain = getDomain();

    const req = new Request(`${domain}/api/collection?collectionId=${collectionId}&getState=${1}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    try {
        const res = await fetch(req, {
            next: { revalidate: 60 },
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching collections by userId:", error);
        return [];
    }
}
