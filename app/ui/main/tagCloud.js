"use client"

import { TagCloud } from "react-tagcloud";

export default function TagsCloud() {
    const data = [
        { value: "JavaScript", count: 38 },
        { value: "React", count: 30 },
        { value: "Nodejs", count: 28 },
        { value: "Express.js", count: 25 },
        { value: "HTML5", count: 33 },
        { value: "MongoDB", count: 18 },
        { value: "CSS3", count: 20 },
    ];

    const SimpleCloud = () => (
        <TagCloud minSize={12} maxSize={35} tags={data} />
    );

    return (
        <>
            <div>
                Tag cloud (when the user clicks on the tag you display the list
                of items — in general you should use “search results page” for
                it)
            </div>
            {SimpleCloud()}
        </>
    );
}

// https://www.npmjs.com/package/react-tagcloud

// tag cloud (when the user clicks on the tag you display the list of items — in general you should use “search results page” for it)
