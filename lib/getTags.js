import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

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
        const message = 'Error fetching tags.';
        const res = catchResponse(error, message)

        return res;
    }
}
