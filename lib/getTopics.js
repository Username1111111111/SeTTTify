import getDomain from "@/lib/getDomain";

export default async function getTopics() {
    const domain = getDomain();

    const req = new Request(`${domain}/api/topics`, {
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
        const message = 'Error fetching topics.';
        const res = catchResponse(error, message)

        return res;
    }
}
