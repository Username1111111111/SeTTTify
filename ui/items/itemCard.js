"use client";
import ItemIdField from "./fields/itemIdField";
import ItemNameField from "./fields/itemNameField";
import TaglistField from "./fields/taglistField";
import OptField from "./fields/optField";
import getItemById from "@/lib/getItemById";
import { useEffect, useState } from "react";

export default function ItemCard({ itemId }) {
    const [item, setItem] = useState();

    useEffect(() => {
        async function fetchItem(itemId) {
            const item = await getItemById(itemId);
            setItem(item);
        }
        fetchItem(itemId);
    }, [itemId]);

    if (!item) {
        return (
            <li className="col-12 col-md-6 p-0 m-0">
                <div className="border border-secondary rounded m-2 p-2 bg-body-secondary d-flex justify-content-center align-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </li>
        );
    }

    console.log(item);
    console.log(item.tags);

    let tagList = [];
    item.tags.map((tag) => tagList.push(tag.name));

    return (
        <li className="col-12 col-md-6 p-0 m-0">
            <div className="border border-secondary rounded m-2 p-1 bg-body-secondary">
                <table className="table w-100 p-0 m-0">
                    <tbody>
                        <ItemIdField itemId={item.id} />
                        <ItemNameField itemName={item.name} />
                        {/* <TaglistField value={item.tags} /> */}
                        <TaglistField itemTags={tagList} />

                        <OptField
                            type={"number"}
                            name={"number:"}
                            value={"number"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"number"}
                            name={"number:"}
                            value={"number"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"number"}
                            name={"number:"}
                            value={"number"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"string"}
                            name={"string:"}
                            value={"string"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"string"}
                            name={"string:"}
                            value={"string"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"string"}
                            name={"string:"}
                            value={"string"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"textarea"}
                            name={"textarea:"}
                            value={"textarea"}
                            itemId={itemId}
                        />

                        {/* <OptField
                            type={"checkbox"}
                            name={"checkbox:"}
                            value={"checkbox"}
                            itemId={itemId}
                        /> */}

                        <OptField
                            type={"date"}
                            name={"date:"}
                            value={"date"}
                            itemId={itemId}
                        />
                    </tbody>
                </table>
            </div>
        </li>
    );
}

// item: {
//     id: "string",
//     name: "string",
//     tags: ["tag1", "tag2", "tag3"],
//     customFields: {
//         integer: "int",
//         string: "string",
//         text: "text",
//         boolean: "bool",
//         date: "date",
//     },
//     comments: ["comment1", "comment2", "comment3"],
//     likes: "int",
// },
