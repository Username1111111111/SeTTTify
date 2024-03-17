import getDomain from "@/lib/getDomain";

export default async function getUserByCollectionId(collectionId) {
    const domain = getDomain();

    const req = new Request(`${domain}/api/user?collectionId=${collectionId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const res = await fetch(req, {
        next: { revalidate: 60 },
    });

    const data = res.json();
    return data;
}
