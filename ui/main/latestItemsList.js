"use client";
import LatestItem from "./latestItem";
import { useTranslations } from "next-intl";
import getItemsLatest from "@/lib/getItemsLatest";
import { useState, useEffect } from "react";

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

export default function LatestItemsList() {
    const t = useTranslations("Home");
    const [items, setItems] = useState([]);
    const latestCount = 10;

    useEffect(() => {
        async function fetchItems() {
            const fetchedItems = await getItemsLatest(latestCount);
            setItems(fetchedItems);
        }
        fetchItems();
    }, [])
    

    // if (!items) {
    //     return (
    //         <div className="border border-secondary rounded p-1 m-0 bg-body-secondary">
    //             <h4 className="text-center mt-2">{t("latest_items")}</h4>
    //             <hr />

    //             <div className="d-flex justify-content-center align-content-center m-2 p-2">
    //                 <div className="spinner-border" role="status">
    //                     <span className="visually-hidden">Loading...</span>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="border border-secondary rounded p-1 m-0 bg-body-secondary">
            <h4 className="text-center mt-2">{t("latest_items")}</h4>
            <hr />
            {createLatestItems(items)}
        </div>
    );
}

// list of latest items (name, collection, author)
