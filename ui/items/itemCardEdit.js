"use client";
import NameInput from "./inputs/nameInput";
import TagInput from "./inputs/tagInput";
import IntegerInput from "./inputs/integerInput";
import StringInput from "./inputs/stringInput";
import TextareaInput from "./inputs/textareaInput";
import CheckboxInput from "./inputs/checkboxInput";
import DateInput from "./inputs/dateInput";
import EditButtonGroup from "../editButtonGroup";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import getItemById from "@/lib/getItemById";
import getCollectionItemsStateByCollectionId from "@/lib/getCollectionItemsStateByCollectionId";
// import formatDate from "@/lib/formatDate";
import extractItemData from "@/lib/extractItemData";
import createItem from "@/lib/createItem";
import updateItem from "@/lib/updateItem";

export default function ItemCardEdit({ itemId, collectionId, mode }) {
    const t = useTranslations("Item");
    const [inputsState, setinputsState] = useState({
        custom_int1_state: false,
        custom_int2_state: false,
        custom_int3_state: false,
        custom_string1_state: false,
        custom_string2_state: false,
        custom_string3_state: false,
        custom_text1_state: false,
        custom_text2_state: false,
        custom_text3_state: false,
        custom_bool1_state: false,
        custom_bool2_state: false,
        custom_bool3_state: false,
        custom_date1_state: false,
        custom_date2_state: false,
        custom_date3_state: false,
    });
    const [inputsNames, setinputsNames] = useState({
        custom_int1_name: "",
        custom_int2_name: "",
        custom_int3_name: "",
        custom_string1_name: "",
        custom_string2_name: "",
        custom_string3_name: "",
        custom_text1_name: "",
        custom_text2_name: "",
        custom_text3_name: "",
        custom_bool1_name: "",
        custom_bool2_name: "",
        custom_bool3_name: "",
        custom_date1_name: "",
        custom_date2_name: "",
        custom_date3_name: "",
    });
    const [formData, setFormData] = useState({
        name: "",
        tags: [],
        custom_int1_value: 0,
        custom_int2_value: 0,
        custom_int3_value: 0,
        custom_string1_value: "",
        custom_string2_value: "",
        custom_string3_value: "",
        custom_text1_value: "",
        custom_text2_value: "",
        custom_text3_value: "",
        custom_bool1_value: false,
        custom_bool2_value: false,
        custom_bool3_value: false,
        custom_date1_value: "",
        custom_date2_value: "",
        custom_date3_value: "",
    });

    useEffect(() => {
        async function fetchItem() {
            if (mode == "edit") {
                const item = await getItemById(itemId);
                // console.log(item);
                let newState = {},
                    newName = {},
                    newValue = {};
                for (const key in item.collection) {
                    if (
                        item.collection.hasOwnProperty(key) &&
                        key.match(/custom_.*_state/)
                    ) {
                        newState[key] = item.collection[key];
                    }
                }
                for (const key in item.collection) {
                    if (
                        item.collection.hasOwnProperty(key) &&
                        key.match(/custom_.*_name/)
                    ) {
                        newName[key] = item.collection[key];
                    }
                }
                for (const key in item) {
                    if (key === "tags") {
                        let tags = [];
                        item[key].map((tag) => tags.push(tag.name));
                        newValue[key] = [...tags];
                    } else {
                        newValue[key] = item[key];
                    }
                }
                setFormData(newValue);
                setinputsNames(newName);
                setinputsState(newState);
            } else if (mode == "create") {
                let newState = {},
                    newName = {};
                let collection = await getCollectionItemsStateByCollectionId(
                    collectionId
                );
                for (const key in collection) {
                    if (
                        collection.hasOwnProperty(key) &&
                        key.match(/custom_.*_state/)
                    ) {
                        newState[key] = collection[key];
                    }
                }
                for (const key in collection) {
                    if (
                        collection.hasOwnProperty(key) &&
                        key.match(/custom_.*_name/)
                    ) {
                        newName[key] = collection[key];
                    }
                }
                setinputsNames(newName);
                setinputsState(newState);
            }
        }
        fetchItem();
    }, [itemId, collectionId, mode]);

    function handleSubmit() {
        const data = extractItemData(formData);
        // console.log(data);

        if (mode == "create") {
            async function postItemData() {
                await createItem(collectionId, data);
            }
            postItemData();
        } else if (mode == "edit") {
            async function updateItemData() {
                await updateItem(itemId, data);
            }
            updateItemData();
        }
    }

    return (
        <div className="col-12 col-md-10 col-lg-8 p-0 m-0 p-2">
            <form
                id={`form-${mode}-${itemId || collectionId}`}
                className="border border-secondary rounded m-md-0 p-1 bg-body-secondary"
            >
                <ul className="w-100 p-2 m-0">
                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">ID</div>
                        <div className="col-7 col-md-8 pe-0">
                            {itemId ? itemId : "Will be auto generated"}
                        </div>
                    </li>

                    <NameInput
                        itemId={itemId}
                        placeholder={t("name_of_item")}
                        name={t("name")}
                        value={formData.name}
                        onChange={(newName) =>
                            setFormData({ ...formData, name: newName })
                        }
                    />

                    <TagInput
                        itemId={itemId}
                        placeholder={t("tags")}
                        name={t("tags")}
                        value={formData.tags || []}
                        onChange={(newTags) =>
                            setFormData({ ...formData, tags: [...newTags] })
                        }
                    />

                    {/* ----------------------------------------- */}

                    {inputsState["custom_int1_state"] ? (
                        <IntegerInput
                            itemId={itemId}
                            placeholder={t("number")}
                            name={inputsNames["custom_int1_name"]}
                            value={formData.custom_int1_value || ""}
                            onChange={(newInt) =>
                                setFormData({
                                    ...formData,
                                    custom_int1_value: newInt,
                                })
                            }
                        />
                    ) : null}

                    {inputsState["custom_int2_state"] ? (
                        <IntegerInput
                            itemId={itemId}
                            placeholder={t("number")}
                            name={inputsNames["custom_int2_name"]}
                            value={formData.custom_int2_value || ""}
                            onChange={(newInt) =>
                                setFormData({
                                    ...formData,
                                    custom_int2_value: newInt,
                                })
                            }
                        />
                    ) : null}

                    {inputsState["custom_int3_state"] ? (
                        <IntegerInput
                            itemId={itemId}
                            placeholder={t("number")}
                            name={inputsNames["custom_int3_name"]}
                            value={formData.custom_int3_value || ""}
                            onChange={(newInt) =>
                                setFormData({
                                    ...formData,
                                    custom_int3_value: newInt,
                                })
                            }
                        />
                    ) : null}

                    {/* ----------------------------------------- */}

                    {inputsState["custom_string1_state"] ? (
                        <StringInput
                            itemId={itemId}
                            placeholder={t("text")}
                            name={inputsNames["custom_string1_name"]}
                            value={formData.custom_string1_value || ""}
                            onChange={(newStr) =>
                                setFormData({
                                    ...formData,
                                    custom_string1_value: newStr,
                                })
                            }
                        />
                    ) : null}

                    {inputsState["custom_string2_state"] ? (
                        <StringInput
                            itemId={itemId}
                            placeholder={t("text")}
                            name={inputsNames["custom_string2_name"]}
                            value={formData.custom_string2_value || ""}
                            onChange={(newStr) =>
                                setFormData({
                                    ...formData,
                                    custom_string2_value: newStr,
                                })
                            }
                        />
                    ) : null}

                    {inputsState["custom_string3_state"] ? (
                        <StringInput
                            itemId={itemId}
                            placeholder={t("text")}
                            name={inputsNames["custom_string3_name"]}
                            value={formData.custom_string3_value || ""}
                            onChange={(newStr) =>
                                setFormData({
                                    ...formData,
                                    custom_string3_value: newStr,
                                })
                            }
                        />
                    ) : null}

                    {/* ----------------------------------------- */}

                    {inputsState["custom_text1_state"] ? (
                        <TextareaInput
                            itemId={itemId}
                            placeholder={t("textarea")}
                            name={inputsNames["custom_text1_name"]}
                            value={formData.custom_text1_name || ""}
                            onChange={(newText) =>
                                setFormData({
                                    ...formData,
                                    custom_text1_value: newText,
                                })
                            }
                        />
                    ) : null}

                    {inputsState["custom_text2_state"] ? (
                        <TextareaInput
                            itemId={itemId}
                            placeholder={t("textarea")}
                            name={inputsNames["custom_text2_name"]}
                            value={formData.custom_text2_name || ""}
                            onChange={(newText) =>
                                setFormData({
                                    ...formData,
                                    custom_text2_value: newText,
                                })
                            }
                        />
                    ) : null}

                    {inputsState["custom_text3_state"] ? (
                        <TextareaInput
                            itemId={itemId}
                            placeholder={t("textarea")}
                            name={inputsNames["custom_text3_name"]}
                            value={formData.custom_text3_name || ""}
                            onChange={(newText) =>
                                setFormData({
                                    ...formData,
                                    custom_text3_value: newText,
                                })
                            }
                        />
                    ) : null}

                    {/* ----------------------------------------- */}

                    {inputsState["custom_bool1_state"] ? (
                        <CheckboxInput
                            itemId={itemId}
                            name={inputsNames["custom_bool1_name"]}
                            value={formData.custom_bool1_value || false}
                            onChange={(newBool) =>
                                setFormData({
                                    ...formData,
                                    custom_bool1_value: newBool,
                                })
                            }
                        />
                    ) : null}

                    {inputsState["custom_bool2_state"] ? (
                        <CheckboxInput
                            itemId={itemId}
                            name={inputsNames["custom_bool2_name"]}
                            value={formData.custom_bool2_value || false}
                            onChange={(newBool) =>
                                setFormData({
                                    ...formData,
                                    custom_bool2_value: newBool,
                                })
                            }
                        />
                    ) : null}

                    {inputsState["custom_bool3_state"] ? (
                        <CheckboxInput
                            itemId={itemId}
                            name={inputsNames["custom_bool3_name"]}
                            value={formData.custom_bool3_value || false}
                            onChange={(newBool) =>
                                setFormData({
                                    ...formData,
                                    custom_bool3_value: newBool,
                                })
                            }
                        />
                    ) : null}

                    {/* ----------------------------------------- */}

                    {inputsState["custom_date1_state"] ? (
                        <DateInput
                            itemId={itemId}
                            name={inputsNames["custom_date1_name"]}
                            value={formData.custom_date1_value || ""}
                            onChange={(newDate) => {
                                const dateValue = new Date(newDate);
                                setFormData({
                                    ...formData,
                                    custom_date1_value: dateValue,
                                });
                            }}
                        />
                    ) : null}

                    {inputsState["custom_date2_state"] ? (
                        <DateInput
                            itemId={itemId}
                            name={inputsNames["custom_date2_name"]}
                            value={formData.custom_date2_value || ""}
                            onChange={(newDate) => {
                                const dateValue = new Date(newDate);
                                setFormData({
                                    ...formData,
                                    custom_date2_value: dateValue,
                                });
                            }}
                        />
                    ) : null}

                    {inputsState["custom_date3_state"] ? (
                        <DateInput
                            itemId={itemId}
                            name={inputsNames["custom_date3_name"]}
                            value={formData.custom_date3_value || ""}
                            onChange={(newDate) => {
                                const dateValue = new Date(newDate);
                                setFormData({
                                    ...formData,
                                    custom_date3_value: dateValue,
                                });
                            }}
                        />
                    ) : null}
                </ul>
                <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0 mb-1">
                    <EditButtonGroup onConfirm={handleSubmit} />
                </div>
            </form>
        </div>
    );
}
