import LargestCollection from "./largestCollection";
import { useTranslations } from "next-intl";

function createLargestCollections() {
    const itemCount = 5;
    const allItems = [];
    for (let i = 0; i < itemCount; i++) {
        allItems.push(
            <LargestCollection
                key={i}
                collectionId={i}
                name={`Collection name`}
            ></LargestCollection>
        );
    }
    return <ul className="row w-100 p-0 m-0">{allItems}</ul>;
}

export default function LargestCollections() {
    const t = useTranslations("Home");

    return (
        <div className="border border-secondary rounded p-1 m-md-0 mt-4 bg-body-secondary">
            <h4 className="text-center mt-2">{t("largest_collections")}</h4>
            <hr/>
            {createLargestCollections()}
        </div>
    );
}

// list of the top 5 largest collections
