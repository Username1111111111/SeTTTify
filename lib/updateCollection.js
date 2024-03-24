import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function updateCollection(collectionId, data) {
    const domain = getDomain();
    const url = `${domain}/api/collection?collectionId=${collectionId}`;

    const req = new Request(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const res = await fetch(req);
        const data = await res.json();

        return data;
    } catch (error) {
        const message = `Failed to update collection by collectionId: ${collectionId}`;
        const res = catchResponse(error, message);

        return res;
    }
}
