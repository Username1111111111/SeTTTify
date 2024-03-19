import getDomain from "@/lib/getDomain";

export default async function getCollectionsLargest(largestCount) {
    const domain = getDomain();

    const req = new Request(`${domain}/api/collections?largest=${largestCount}`, {
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



// https://www.prisma.io/docs/orm/reference/prisma-client-reference#aggregate