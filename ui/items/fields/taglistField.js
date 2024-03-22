"use client";
import { useTranslations } from "next-intl";
import generateUniqueId from "@/lib/generateUniqueId";
import { useState, useEffect } from "react";

export default function TaglistField({ itemTags }) {
    const t = useTranslations("Item");
    const [tags, setTags] = useState();

    useEffect(() => {
        let tags = itemTags.map((tag, index) => (
            <span
                key={tag + index + generateUniqueId()}
                className="border border-secondary rounded me-1 mb-1 ps-1 pe-1 text-nowrap"
            >
                {tag}
            </span>
        ));
        setTags(tags);
    }, [itemTags])

    return (
        <tr className="">
            <td className="bg-body-secondary">{t("tags")}:</td>
            <td className="bg-body-secondary d-flex flex-wrap">{tags ? tags : ""}</td>
        </tr>
    );
}
