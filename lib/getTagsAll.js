import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function getTagsAll() {
    const domain = getDomain();

    const req = new Request(`${domain}/api/tags?all=1`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    try {
        const res = await fetch(req, {
            // next: { revalidate: 60 },
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
