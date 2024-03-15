"use client"
import { useParams } from "next/navigation";


export default function User() {
    const params = useParams();
    const userId = params.userId;

    return (
        <div>Current userId: {userId}</div>
    );
}
