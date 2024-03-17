import getDomain from "@/lib/getDomain";

export default async function getCollectionsByUserId(userId) {
    const domain = getDomain();

    const req = new Request(`${domain}/api/collections?userId=${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    try {
        const res = await fetch(req, {
            cache: "force-cache",
            next: { revalidate: 60 },
        });

        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }

    
}
