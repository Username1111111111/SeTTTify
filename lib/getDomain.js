export default function getDomain() {
    let domain;
    if (process.env.NODE_ENV === "development") {
        domain = "http://localhost:3000"
    } else {
        domain = process.env.NEXT_PUBLIC_API_URL;
    }
    return domain;
}
