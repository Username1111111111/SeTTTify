"use client";
import { TagCloud } from "react-tagcloud";
import { useState } from "react";
import TagItem from "./tagItem";
import styles from './tagCloud.module.css';
import { useTranslations } from "next-intl";

function createTagItems(selectedTag) {
    const itemCount = 5;
    const allItems = [];
    for (let i = 0; i < itemCount; i++) {
        allItems.push(<TagItem key={i} itemId={i} name={`Name`}></TagItem>);
    }
    return (
        <>
            <span id="tagspan">{`${selectedTag}`}</span>
            <ul className="row w-100 p-0 m-0">{allItems}</ul>
        </>
    );
}

export default function TagsCloud() {
    const [selectedTag, setSelectedTag] = useState("");
    const t = useTranslations("Home");

    const data = [
        { value: "JavaScript", count: 38 },
        { value: "React", count: 30 },
        { value: "Nodejs", count: 28 },
        { value: "Express.js", count: 25 },
        { value: "HTML5", count: 33 },
        { value: "MongoDB", count: 18 },
        { value: "CSS3", count: 20 },
    ];

    function handleClick(tag) {
        setSelectedTag(tag.value);
    }

    const customRenderer = (tag, size, color) => (
        <span
            key={tag.value}
            style={{
                animation: `${styles.blinker} 3s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: size,
                display: "inline-block",
                color: color,
                margin: 2+"px",
                cursor: "pointer"
                
            }}
            className="cursor-pointer"
        >
            {tag.value}
        </span>
    );

    const SimpleCloud = () => (
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            onClick={(event) => handleClick(event)}
            renderer={customRenderer}
        />
    );

    return (
        <div className="border border-secondary rounded p-1 m-md-0 mt-4 mb-4 bg-body-secondary">
            <h4 className="text-center mt-2">{t('tags')}</h4>
            <hr />
            {SimpleCloud()}
            {selectedTag ? createTagItems(selectedTag) : null}
        </div>
    );
}

// https://www.npmjs.com/package/react-tagcloud

// tag cloud (when the user clicks on the tag you display the list of items — in general you should use “search results page” for it)
