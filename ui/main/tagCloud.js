"use client";
import { TagCloud } from "react-tagcloud";
import { useEffect, useState } from "react";
import TagItem from "./tagItem";
import styles from "./tagCloud.module.css";
import { useTranslations } from "next-intl";
import getTags from "@/lib/getTags";

export default function TagsCloud() {
    const [selectedTag, setSelectedTag] = useState("");
    const [tags, setTags] = useState([]);
    const t = useTranslations("Home");

    useEffect(() => {
        async function fetchTags() {
            const fetchedTags = await getTags();
            setTags(
                fetchedTags.map((tag) => ({
                    id: tag.id,
                    name: tag.name,
                    items: tag.items,
                    count: +tag._count.items,
                }))
            );
        }
        fetchTags();
    }, []);

    const customRenderer = (tag, size, color) => (
        <span
            key={tag.id}
            style={{
                animation: `${styles.blinker} 3s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: size,
                display: "inline-block",
                color: color,
                margin: 2 + "px",
                cursor: "pointer",
            }}
            className="cursor-pointer"
        >
            {tag.name}
        </span>
    );

    const SimpleCloud = () => (
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={tags}
            onClick={(tag) => handleClick(tag)}
            renderer={customRenderer}
        />
    );

    function handleClick(tag) {
        setSelectedTag(tag);
    }

    // if (!tags) {
    //     return (
    //         <div className="border border-secondary rounded p-1 m-md-0 mt-4 mb-4 bg-body-secondary">
    //             <h4 className="text-center mt-2">{t("tags")}</h4>
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
        <div className="border border-secondary rounded p-1 m-md-0 mt-4 mb-4 bg-body-secondary">
            <h4 className="text-center mt-2">{t("tags")}</h4>
            <hr />
            {SimpleCloud()}
            {selectedTag ? createTagItems(selectedTag, tags) : null}
        </div>
    );
}

function createTagItems(selectedTag) {
    const allItems = [];

    selectedTag.items.map((item) => {
        allItems.push(
            <TagItem key={item.id} itemId={item.id} name={item.name} />
        );
    });

    return (
        <>
            {/* <span id="tagspan">{`${selectedTag.name}`}</span> */}
            <ul className="row w-100 p-0 m-0">{allItems}</ul>
        </>
    );
}

// https://www.npmjs.com/package/react-tagcloud

// tag cloud (when the user clicks on the tag you display the list of items — in general you should use “search results page” for it)
