import LatestItem from "./latestItem";
import { useTranslations } from "next-intl";
import getItemsLatest from "@/lib/getItemsLatest";

function createLatestItems(items) {
    // const itemCount = 10;
    const allItems = [];

    items.map( item => {
        allItems.push(<LatestItem key={item.id} itemId={item.id} name={item.name} collection={item.collection.name} author={item.user.name}/>);
    });
    // for (let i = 0; i < itemCount; i++) {
    //     allItems.push(<LatestItem key={i} itemId={i} name={`Name`} collection={`Collection`} author={`Author`}></LatestItem>);
    // }
    return <ul className="row w-100 p-0 m-0">{allItems}</ul>;
}

export default async function LatestItemsList() {
    const t = useTranslations("Home")

    const items = await getItemsLatest();

    return (
        <div className="border border-secondary rounded p-1 m-0 bg-body-secondary"> 
            <h4 className="text-center mt-2">{t("latest_items")}</h4>
            <hr/>
            {createLatestItems(items)}
        </div>
    );
}

// list of latest items (name, collection, author)
