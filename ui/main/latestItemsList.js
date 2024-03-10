import LatestItem from "./latestItem";
import { useTranslations } from "next-intl";

function createLatestItems() {
    const itemCount = 10;
    const allItems = [];
    for (let i = 0; i < itemCount; i++) {
        allItems.push(<LatestItem key={i} itemId={i} name={`Name`} collection={`Collection`} author={`Author`}></LatestItem>);
    }
    return <ul className="row w-100 p-0 m-0">{allItems}</ul>;
}

export default function LatestItemsList() {
    const t = useTranslations("Home")

    return (
        <div className="border border-secondary rounded p-1 m-0 bg-body-secondary"> 
            <h4 className="text-center mt-2">{t("latest_items")}</h4>
            <hr/>
            {createLatestItems()}
        </div>
    );
}

// list of latest items (name, collection, author)
