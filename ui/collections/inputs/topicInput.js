"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function TopicInput({ name, collectionId, topics, choosenTopic }) {
    const [topicsArr, setTopicsArr] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");
    const t = useTranslations("Collection")

    useEffect(() => {
        setTopicsArr(topics);
        setSelectedTopic(choosenTopic);
    }, [topics, choosenTopic]);

    let options = [];
    topicsArr.map( (topic) => {
        options.push(
            <option key={topic.id} value={topic.id}>{topic.name}</option>
        );
    })

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
        console.log(event.target.value);
    };

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label
                    htmlFor={`topic-${collectionId}`}
                    className="col-4 m-0 w-100"
                >
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <select
                    id={`topic-${collectionId}`}
                    className="form-select border border-secondary flex-grow-1"
                    aria-label="Default select example"
                    value={selectedTopic}
                    onChange={handleTopicChange}
                >
                    <option value="">{t("select_topic")}</option>
                    {options}
                </select>
            </div>
        </li>
    );
}
