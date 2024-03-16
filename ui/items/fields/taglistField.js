import { useTranslations } from "next-intl";
// import { useState } from "react";

export default function TaglistField({ itemTags }) {
    let tags;
    if (itemTags) {
        tags = itemTags.map((tag, index) => (
            <span
                key={tag + index}
                className="border border-secondary rounded m-1 ps-1 pe-1 text-nowrap"
            >
                {tag}
            </span>
        ));
    }

    const t = useTranslations("Item");
    return (
        <tr className="">
            <td className="bg-body-secondary">{t("tags")}:</td>
            <td className="bg-body-secondary">{tags ? tags : ""}</td>
        </tr>
    );
}
