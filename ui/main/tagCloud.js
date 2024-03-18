"use client";
import { TagCloud } from "react-tagcloud";
import { useEffect, useState } from "react";
import TagItem from "./tagItem";
import styles from './tagCloud.module.css';
import { useTranslations } from "next-intl";
import getTags from "@/lib/getTags";

export default function TagsCloud() {
    const [selectedTag, setSelectedTag] = useState("");
    const [tags, setTags] = useState("");
    const t = useTranslations("Home");
    

    useEffect(()=>{
        async function fetchTags() {
            const tags = await getTags();
            setTags(tags);
        }
        fetchTags();
    }, [])

    // TO BE FINISHED !!!
    
    // let data = [];
    // tags.map(tag => {
    //     data.push( { name: tag.name, count: 12 },)
    // })

    const data = [
        { name: "JavaScript", count: 12 },
        { name: "React", count: 12 },
        { name: "Nodejs", count: 12 },
        { name: "Express.js", count: 12 },
        { name: "HTML5", count: 12 },
        { name: "MongoDB", count: 12 },
        { name: "CSS3", count: 12 },
    ];

    const customRenderer = (tag, size, color) => (
        <span
            key={tag.name}
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
            {tag.name}
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

    function handleClick(tag) {
        setSelectedTag(tag.name);
    }

    return (
        <div className="border border-secondary rounded p-1 m-md-0 mt-4 mb-4 bg-body-secondary">
            <h4 className="text-center mt-2">{t('tags')}</h4>
            <hr />
            {SimpleCloud()}
            {selectedTag ? createTagItems(selectedTag) : null}
        </div>
    );
}

function createTagItems(selectedTag) {
    const itemCount = 5;
    const allItems = [];

    for (let i = 0; i < itemCount; i++) {
        allItems.push(<TagItem key={i} itemId={i} name={`Name`}></TagItem>);
    }

    return (
        <>
            {/* <span id="tagspan">{`${selectedTag}`}</span> */}
            <ul className="row w-100 p-0 m-0">{allItems}</ul>
        </>
    );
}


// https://www.npmjs.com/package/react-tagcloud

// tag cloud (when the user clicks on the tag you display the list of items — in general you should use “search results page” for it)
