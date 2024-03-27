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

        const resBody = JSON.stringify(data);

        const newRes = new Response(resBody, {
            status: 200,
            statusText: "Collection deleted",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return newRes;
    } catch (error) {
        const message = `Failed to delete collection by collectionId: ${collectionId}`;
        const res = catchResponse(error, message);

        return res;
    }
}
