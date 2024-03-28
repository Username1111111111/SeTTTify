"use client";
import React, { useEffect, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import getTagsAll from "@/lib/getTagsAll";
// import styles from './YourStyles.module.css';

const TagInput = ({ itemId, value, onChange, placeholder, name }) => {
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    async function fetchSuggestions() {
        const fetchedSuggestions = await getTagsAll();
        console.log(fetchedSuggestions);
        return fetchedSuggestions;
    }

    useEffect(() => {
        fetchSuggestions().then((fetchedSuggestions) => {
            setSuggestions(
                fetchedSuggestions.map((suggestion) => ({
                    id: suggestion.name,
                    text: suggestion.name,
                }))
            );
        });
    }, []);

    useEffect(() => {
        setTags(
            value.map((tag, index) => ({ id: index.toString(), text: tag }))
        );
        // console.log(value);
        // console.log(tags);
    }, [value]);

    const handleDelete = (i) => {
        let newTags = tags.filter((tag, index) => index !== i);
        setTags(newTags);

        let newTagsArr = [];
        newTags.map((tag) => newTagsArr.push(tag.text));
        onChange(newTagsArr);
    };

    const handleAddition = (tag) => {
        if (typeof tags !== "string") {
            setTags([...tags, tag]);

            let prevTags = [];
            tags.map((tag) => prevTags.push(tag.text));
            onChange([...prevTags, tag.text]);
        } else {
            setTags([tag]);
            onChange([tag.text]);
        }
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = [...tags].slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setTags(newTags);

        let newTagsArr = [];
        newTags.map((tag) => newTagsArr.push(tag.text));
        onChange(newTagsArr);
    };

    const handleTagClick = (index) => {
        // console.log("The tag at index " + index + " was clicked");
    };

    const handleInputChange = (input) => {
        setInputValue(input);
    };

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">{name}:</div>
            <div className="col-7 col-md-8 pe-0">
                <div className="bg-body-secondary p-0 m-0 d-flex justify-content-center align-items-center">
                    <ReactTags
                        tags={tags}
                        suggestions={suggestions}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        handleInputChange={handleInputChange}
                        handleTagClick={handleTagClick}
                        minQueryLength={1}
                        inputValue={inputValue}
                        placeholder={placeholder}
                        delimiters={delimiters}
                        maxLength={8}
                        allowUnique={true}
                        allowDeleteFromEmptyInput={false}
                        classNames={{
                            tags: "w-100",
                            tag: "border border-secondary rounded m-1 ps-1 pe-1 text-nowrap",
                            remove: "p-0 m-0 ms-1 bg-transparent border-0",
                            tagInput: "w-100",
                            tagInputField:
                                "w-100 form-control border border-secondary mb-2 mt-2",
                            selected: "m-0 p-0",
                            suggestions:
                                "btn d-flex flex-row text-center m-0 p-0 bg-transparent",
                            // activeSuggestion: "text-center d-flex flex-column justify-content-start align-items-center",
                            // editTagInput: "editTagInputClass",
                            // editTagInputField: "",
                            // clearAll: "",
                        }}
                    />
                </div>
            </div>
        </li>
    );
};

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default TagInput;
