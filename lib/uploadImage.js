import catchResponse from "./catchResponse";

export default async function uploadImage(file) {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('filename', file.name);
    formData.append('contentType', file.type);

    try {
        const req = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        const res = await req.json();
        // const publicUrl = res.publicUrl;

    } catch (error) {
        const message = 'Failed to upload file';
        const res = catchResponse(error, message)

        return res;
    }
}