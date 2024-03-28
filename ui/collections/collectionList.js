"use client";
import CollectionListItem from "./collectionListItem";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import getDomain from "@/lib/getDomain";
import Spinner from "@/ui/spinner";

export default function CollectionList({ userId }) {
    const t = useTranslations("Sidebarplus");
    const [collections, setCollections] = useState([]);
    const domain = getDomain();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCollections() {
            if (userId) {
                const req = new Request(`${domain}/api/collections?userId=${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const res = await fetch(req, {
                    next: { revalidate: 60 },
                });

                const data = await res.json();
                setCollections(data);
                setLoading(false);
            }
        }
        fetchCollections();
    }, [userId, domain, loading]);

    return (
        <div className="row w-100 d-flex align-items-center">
            <p className="text-center fs-5 mt-2 mb-0">
                {t("collections")}:
            </p>
            {loading ? <Spinner/> : createCollectionItems(collections, userId)}
        </div>
    );
}

export function createCollectionItems(collections, userId) {
    return (
        <ul className="row w-100 m-0 p-0 p-2">
            {collections.map((collection) => (
                <CollectionListItem
                    key={collection.id}
                    id={collection.id}
                    name={collection.name}
                    userId={userId}
                />
            ))}
        </ul>
    );
}