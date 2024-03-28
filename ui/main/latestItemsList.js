"use client";
import LatestItem from "./latestItem";
import { useTranslations } from "next-intl";
import getItemsLatest from "@/lib/getItemsLatest";
import { useState, useEffect } from "react";
import Spinner from "@/ui/spinner";

export default function LatestItemsList() {
    const t = useTranslations("Home");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const latestCount = 10;

    useEffect(() => {
        async function fetchItems() {
            const fetchedItems = await getItemsLatest(latestCount);
            setItems(fetchedItems);
            setLoading(false);
        }
        fetchItems();
    }, [loading]);


    return (
        <div className="border border-secondary rounded p-1 m-0 bg-body-secondary minWidth100">
            <h4 className="text-center mt-2">{t("latest_items")}</h4>
            <hr />
            <>{loading ? <Spinner/> : createLatestItems(items)}</>
        </div>
    );
}

// list of latest items (name, collection, author)

function createLatestItems(items) {
    const allItems = [];

    items.map((item) => {
        allItems.push(
            <LatestItem
                key={item.id}
                itemId={item.id}
                name={item.name}
                collection={item.collection.name}
                author={item.user.name}
            />
        );
    });

    return <ul className="row w-100 p-0 m-0">{allItems}</ul>;
}
