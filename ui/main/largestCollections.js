"use client";
import LargestCollection from "./largestCollection";
import { useTranslations } from "next-intl";
import getCollectionsLargest from "@/lib/getCollectionsLargest";
import { useState, useEffect } from "react";

export default function LargestCollections() {
    const t = useTranslations("Home");
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        async function fetchCollections() {
            const fetchedCollections = await getCollectionsLargest(5);
            setCollections(fetchedCollections);
            setLoading(false);
        }
        fetchCollections();
    }, [loading, collections]);

    const spinner = (
        <div className="d-flex flex-grow-1 justify-content-center align-content-center m-2 p-2 minWidth100">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
    
    return (
        <div className="border border-secondary rounded p-1 m-md-0 mt-4 bg-body-secondary">
            <h4 className="text-center mt-2">{t("largest_collections")}</h4>
            <hr />
            {loading ? spinner : createLargestCollections(collections)}
        </div>
    );
}

// list of the top 5 largest collections

function createLargestCollections(collections) {
    const allCollections = [];

    if (!Array.isArray(collections)) {
        return <ul className="row w-100 p-0 m-0"><li className="text-center">Failed to fetch largest collections</li></ul>;
    }

    collections.map((collection) => {
        allCollections.push(
            <LargestCollection
                key={collection.id}
                collectionId={collection.id}
                name={collection.name}
                itemsCount={collection._count.items}
            />
        );
    });

    return <ul className="row w-100 p-0 m-0">{allCollections}</ul>;
}