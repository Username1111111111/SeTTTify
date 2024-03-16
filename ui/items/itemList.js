"use client";
import ItemListItem from "./itemListItem";
import CollectionCard from "../collections/collectionCard";
import FilterSorter from "../filterSorter";
import { useEffect, useState } from "react";
import getItems from "@/lib/getItems";

export default function ItemList({ collectionId }) {
    const [items, setItems] = useState([]);
    const [initialItems, setInitialItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            if (collectionId) {
                const data = await getItems(collectionId);
                setItems(data);
                setInitialItems(data);
            }
        }
        fetchItems();
    }, [collectionId]);

    const handleFilter = (event) => {
        const filterText = event.target.value.toLowerCase();
        if (!filterText) {
            setItems(initialItems);
            return;
        }
        const filteredItems = initialItems.filter((item) => {
            return item.tags.some((tag) => tag.name.toLowerCase().includes(filterText));
        });
        setItems(filteredItems);
    };

    const handleSort = (order) => {
        const sortedItems = [...items].sort((a, b) => {
            // Each item has a name property to sort by

            const nameA = a.name || "";
            const nameB = b.name || "";

            if (order === "asc") {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });
        setItems(sortedItems);
    };

    const itemList = items.map((item) => {

        let itemTagsArr = [];
        item.tags.forEach(tag => itemTagsArr.push(tag.name));

        return (<ItemListItem
            key={item.id}
            itemId={item.id}
            itemName={item.name}
            itemTags={itemTagsArr}
        />)
        
        });

    return (
        <div className="p-0 m-0 w-100">
            <div className="row w-100 p-0 m-0 d-flex flex-column justify-content-center align-items-center">
                <CollectionCard collectionId={collectionId} />
            </div>
            <div className="row w-100 p-2 m-0 d-flex flex-column justify-content-center align-items-center">
                <FilterSorter onFilter={handleFilter} onSort={handleSort} />
            </div>
            {/* {createItemList()} */}
            <ul className="row w-100 p-0 m-0">{itemList}</ul>
        </div>
    );
}
