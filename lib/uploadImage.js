import catchResponse from "./catchResponse";
import getDomain from "./getDomain";

export default async function uploadImage(file, collectionId) {
    const formData = new FormData();
    const domain = getDomain();

    if (!file.name) {
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

    // console.log(file.type);

    try {
        const res = await fetch(`${domain}/api/upload?collectionId=${collectionId}`, {
            method: 'POST',
            body: formData,
        });

        const resBody = JSON.stringify(res);

        const newRes = new Response(resBody, {
            status: 200,
            statusText: "File uploaded",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return newRes;
    } catch (error) {
        const message = 'Failed to upload file';
        const res = catchResponse(error, message)

        return res;
    }
}