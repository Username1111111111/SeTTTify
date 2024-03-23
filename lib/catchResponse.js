export default function catchResponse(error, message) {
    const resBody = JSON.stringify({ error: error.message });

    const res = new Response(resBody, {
        status: 500,
        statusText: `${message}`,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res;
}
