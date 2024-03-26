import getDomain from "@/lib/getDomain";
import catchResponse from "./catchResponse";

export default async function usersDeadmin( data ) {
    const domain = getDomain();
    const url = `${domain}/api/users?admin=0`

    const req = new Request(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const res = await fetch(req);
        const data = await res.json();

        return data;
    } catch (error) {
        const message = `Failed to remove users from admins`;
        const res = catchResponse(error, message);

        return res;
    }
}
