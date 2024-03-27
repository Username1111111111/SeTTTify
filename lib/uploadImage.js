import catchResponse from "./catchResponse";

export default async function uploadImage(file, collectionId) {
    const formData = new FormData();

    if (!file || file.name) {
        const resBody = JSON.stringify("No image provided");

        const res = new Response(resBody, {
            status: 406,
            statusText: "File wasn't provided",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return res;
    }
    formData.append('file', file);
    formData.append('filename', file.name);
    formData.append('contentType', file.type);

    try {
        const req = await fetch(`/api/upload?collectionId=${collectionId}`, {
            method: 'POST',
            body: formData,
        });

        const res = await req.json();
        // const publicUrl = res.publicUrl;
        return res;
    } catch (error) {
        const message = 'Failed to upload file';
        const res = catchResponse(error, message)

        return res;
    }
}