"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./tagInput.module.css";
import generateUniqueId from "@/lib/generateUniqueId";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function TagInput({ itemId, placeholder, name, value, onChange }) {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const t = useTranslations("Item")

    useEffect(() => {
        setTags(value);
    }, [value]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === "Enter" && inputValue) {
            if (!tags.includes(inputValue)) {
                setTags([...tags, inputValue]);
                // console.log([...tags, inputValue])
                onChange([...tags, inputValue]);
                setInputValue("");
            } else {
                alert(`${t("duplicated_tag")}`);
            }
        }
    };

    const removeTag = (indexToRemove) => {
        const newTags = tags.filter((_, index) => index !== indexToRemove);
        setTags(newTags);
        // console.log(newTags)
        onChange(newTags);
    };

    const inputId = `tags-${itemId ? itemId : "create"}-${generateUniqueId()}`;

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">{name}:</div>
            <div className="col-7 col-md-8 pe-0">
                <div className="form-control border border-secondary p-1 m-0 d-flex flex-wrap justify-content-start align-items-center">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="btn-primary border border-secondary rounded d-flex flex-row justify-content-start align-items-center m-1 ps-1 text-nowrap"
                        >
                            {tag}
                            <button
                                type="button"
                                className="btn d-flex flex-row justify-content-start align-items-center p-0 m-0 ms-1 me-1 bg-body"
                                onClick={() => removeTag(index)}
                            >
                                <IoMdClose color={"red"} />
                            </button>
                        </span>
                    ))}

                    <input
                        type="text"
                        value={inputValue}
                        id={inputId}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        placeholder={`${placeholder}...`}
                        size={6}
                        className={`${styles.tagInput} bg-body border border-secondary rounded p-0 ps-2 pe-2 m-0`}
                    />
                </div>
            </div>
        </li>
    );
}
