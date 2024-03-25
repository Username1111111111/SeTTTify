"use client";
import ItemIdField from "./fields/itemIdField";
import ItemNameField from "./fields/itemNameField";
import TaglistField from "./fields/taglistField";
import OptField from "./fields/optField";
import getItemById from "@/lib/getItemById";
import { useEffect, useState } from "react";
import formatDate from "@/lib/formatDate";

export default function ItemCard({ itemId, userId }) {
    const [item, setItem] = useState();
    const n = "number", s = "string", t = "textarea", c = "checkbox", d = "date";

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


    let tagList = [];
    item.tags.map((tag) => tagList.push(tag.name));

    return (
        <li className="col-12 col-md-6 p-0 m-0">
            <div className="border border-secondary rounded m-2 p-1 bg-body-secondary">
                <table className="table w-100 p-0 m-0">
                    <tbody>
                        <ItemIdField itemId={item.id} userId={userId} />
                        <ItemNameField itemName={item.name} />
                        <TaglistField itemTags={tagList} />

                        {/*  ---------------------------------- */}

                        {item.collection.custom_int1_state ? <OptField
                            type={n}
                            name={item.collection.custom_int1_name}
                            value={item.custom_int1_value}
                            itemId={item.id}
                        />  : null}

                        {item.collection.custom_int2_state ? <OptField
                            type={n}
                            name={item.collection.custom_int2_name}
                            value={item.custom_int2_value}
                            itemId={item.id}
                        />  : null}
                        
                        {item.collection.custom_int3_state ? <OptField
                            type={n}
                            name={item.collection.custom_int3_name}
                            value={item.custom_int3_value}
                            itemId={item.id}
                        />  : null}

                        {/*  ---------------------------------- */}

                        {item.collection.custom_string1_state ? <OptField
                            type={s}
                            name={item.collection.custom_string1_name}
                            value={item.custom_string1_value}
                            itemId={item.id}
                        />  : null}

                        {item.collection.custom_string2_state ? <OptField
                            type={s}
                            name={item.collection.custom_string2_name}
                            value={item.custom_string2_value}
                            itemId={item.id}
                        />  : null}
                        
                        {item.collection.custom_string3_state ? <OptField
                            type={s}
                            name={item.collection.custom_string3_name}
                            value={item.custom_string3_value}
                            itemId={item.id}
                        />  : null}

                        {/*  ---------------------------------- */}

                        {item.collection.custom_text1_state ? <OptField
                            type={t}
                            name={item.collection.custom_text1_name}
                            value={item.custom_text1_value}
                            itemId={item.id}
                        />  : null}

                        {item.collection.custom_text2_state ? <OptField
                            type={t}
                            name={item.collection.custom_text2_name}
                            value={item.custom_text2_value}
                            itemId={item.id}
                        />  : null}
                        
                        {item.collection.custom_text3_state ? <OptField
                            type={t}
                            name={item.collection.custom_text3_name}
                            value={item.custom_text3_value}
                            itemId={item.id}
                        />  : null}

                        {/*  ---------------------------------- */}

                        {item.collection.custom_bool1_state ? <OptField
                            type={c}
                            name={item.collection.custom_bool1_name}
                            value={item.custom_bool1_value}
                            itemId={item.id}
                        />  : null}

                        {item.collection.custom_bool2_state ? <OptField
                            type={c}
                            name={item.collection.custom_bool2_name}
                            value={item.custom_bool2_value}
                            itemId={item.id}
                        />  : null}
                        
                        {item.collection.custom_bool3_state ? <OptField
                            type={c}
                            name={item.collection.custom_bool3_name}
                            value={item.custom_bool3_value}
                            itemId={item.id}
                        />  : null}

                        {/*  ---------------------------------- */}

                        {item.collection.custom_date1_state ? <OptField
                            type={d}
                            name={item.collection.custom_date1_name}
                            value={formatDate(item.custom_date1_value)}
                            itemId={item.id}
                        />  : null}

                        {item.collection.custom_date2_state ? <OptField
                            type={d}
                            name={item.collection.custom_date2_name}
                            value={formatDate(item.custom_date2_value)}
                            itemId={item.id}
                        />  : null}
                        
                        {item.collection.custom_date3_state ? <OptField
                            type={d}
                            name={item.collection.custom_date3_name}
                            value={formatDate(item.custom_date3_value)}
                            itemId={item.id}
                        />  : null}

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
