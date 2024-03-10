// import ItemCard from "./itemCard";
import ItemListItem from "./itemListItem";
import CollectionCard from "../collections/collectionCard";
import { useParams } from "next/navigation";
import FilterSorter from "../filterSorter";
import { useState } from "react";

// function createItemList() {
//     const itemCount = 20;
//     const allItems = [];
//     for (let i = 0; i < itemCount; i++) {
//         // allItems.push(<ItemCard key={i} itemId={i}></ItemCard>);
//         allItems.push(<ItemListItem key={i} itemId={i}></ItemListItem>);
//     }
//     return <ul className="row w-100 p-0 m-0">{allItems}</ul>;
// }

export default function ItemList() {
    const params = useParams();
    const collectionId = params.collectionId;

    const itemCount = 20;
    const initialItems = Array.from({ length: itemCount }, (_, i) => ({
        itemId: i,
        // other item data
    }));

    const [items, setItems] = useState(initialItems);

    const handleFilter = (event) => {
        const filterText = event.target.value.toLowerCase();
        const filteredItems = initialItems.filter(item =>
            // Each item has a tags property which is an array of strings
            item.tags.some(tag => tag.toLowerCase().includes(filterText))
        );
        setItems(filteredItems);
    };

    const handleSort = (order) => {
        const sortedItems = [...items].sort((a, b) => {
            // Each item has a name property to sort by

            const nameA = a.name || '';
            const nameB = b.name || '';

            if (order === 'asc') {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });
        setItems(sortedItems);
    };

    const itemList = items.map((item, index) => (
        <ItemListItem key={index} itemId={item.itemId} itemData={item} />
    ));

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
