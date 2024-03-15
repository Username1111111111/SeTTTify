"use client"
import Sidebar from "@/ui/collections/sidebar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CollectionLayout({ children }) {
    const [collectionId, setCollectionId] = useState("");
    const [userId, setUserId] = useState("");
    const params = useParams();

    useEffect( () => {
        setCollectionId(params.collectionId);
    }, [params.collectionId]);

    useEffect( () => {
        async function getUserCollection(userId) {
            if (collectionId) {
                const req = new Request(`${domain}/api/collections?collectionId=${collectionId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const res = await fetch(req, {
                    cache: "force-cache",
                    next: { revalidate: 10 },
                });

                const data = await res.json();
                setCollections(data);
            }
        }
    }, [collectionId])

    return (
        <>
            <Sidebar userId={userId} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">{children}</div>
        </>
    );
}
