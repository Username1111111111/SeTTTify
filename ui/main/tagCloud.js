"use client";
import { TagCloud } from "react-tagcloud";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import TagItem from "./tagItem";
import styles from "./tagCloud.module.css";
import getTags from "@/lib/getTags";
import Spinner from "@/ui/spinner";

export default function TagsCloud() {
    const [selectedTag, setSelectedTag] = useState("");
    const [tags, setTags] = useState([]);
    const t = useTranslations("Home");
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
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
                border: `3px solid ${color}`,
                // borderRadius: 10+"px",
                margin: 2 + "px",
                cursor: "pointer",
            }}
            className="cursor-pointer m-1 rounded p-1"
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
            className="m-2"
        />
    );

    function handleClick(tag) {
        setSelectedTag(tag);
    }

    return (
        <div className="border border-secondary rounded p-1 m-md-0 mt-4 mb-4 bg-body-secondary">
            <h4 className="text-center mt-2 w-100">{t("tags")}</h4>
            <hr />
            {loading ? <Spinner/> : SimpleCloud()}
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
            <ul className="row w-100 p-0 m-0">{allItems}</ul>
        </>
    );
}

// https://www.npmjs.com/package/react-tagcloud

// tag cloud (when the user clicks on the tag you display the list of items — in general you should use “search results page” for it)
