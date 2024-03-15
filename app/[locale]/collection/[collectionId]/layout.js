"use client";
import Sidebar from "@/ui/collections/sidebar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getDomain from "@/lib/getDomain";

export default function CollectionLayout({ children }) {
    const [collectionId, setCollectionId] = useState("");
    const [userId, setUserId] = useState('');
    const params = useParams();
    const domain = getDomain();

    useEffect(() => {
        setCollectionId(params.collectionId);
    }, [params.collectionId]);

    useEffect(() => {
        async function getUser(collectionId) {
            if (collectionId) {
                const req = new Request(
                    `${domain}/api/user?collectionId=${collectionId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const res = await fetch(req, {
                    cache: "force-cache",
                    next: { revalidate: 60 },
                });

                const data = await res.json();
                setUserId(data);
            }
        }
        getUser(collectionId)
    }, [domain, collectionId]);

    return (
        <>
            <Sidebar userId={userId} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">
                {children}
            </div>
        </>
    );
}
