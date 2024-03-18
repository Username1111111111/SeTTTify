import getDomain from "@/lib/getDomain";

export default async function getTags() {
    const domain = getDomain();

    const req = new Request(`${domain}/api/tags`, {
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
    }
    catch (error) {
        console.error("Error fetching tags:", error);
        return [];
    }

}
