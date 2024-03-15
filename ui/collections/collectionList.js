"use client";
import CollectionListItem from "./collectionListItem";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import getDomain from "@/lib/getDomain";

export function createCollectionItems(collections) {
    return (
        <ul className="row w-100 m-0 p-0 p-2">
            {collections.map((collection) => (
                <CollectionListItem
                    key={collection.id}
                    id={collection.id}
                    name={collection.name}
                />
            ))}
        </ul>
    );
}

export default function CollectionList({ userId }) {
    const t = useTranslations("Sidebarplus");
    const [collections, setCollections] = useState([]);
    const domain = getDomain();
    // console.log(`Domain =====> ${domain}`)

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
                    cache: "force-cache",
                    next: { revalidate: 60 },
                });

                const data = await res.json();
                setCollections(data);
            }
        }
        fetchCollections();
    }, [userId, domain]);

    return (
        <div className="row w-100">
            <p className="text-center fs-5 mt-2 mb-0">
                {t("your_collections")}:
            </p>
            {createCollectionItems(collections)}
        </div>
    );
}
