import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function deleteCollection(collectionId) {
    const domain = getDomain();
    const url = `${domain}/api/collection?collectionId=${collectionId}`

    const req = new Request(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });

    try {
        const res = await fetch(req);
        const data = await res.json();

        return data;
    } catch (error) {
        const message = `Failed to delete collection by collectionId: ${collectionId}`;
        const res = catchResponse(error, message);

        return res;
    }
}
