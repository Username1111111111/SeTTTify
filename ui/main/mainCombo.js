import LatestItemsList from "./latestItemsList";
import LargestCollections from "./largestCollections";
import TagCloud from "./tagCloud";
import { useTranslations } from "next-intl";

export default function MainCombo() {
    const t = useTranslations('Home');
    
    return (
        <div className="col-12 col-md-12 d-flex flex-column justify-content-start align-items-center p-2">
            <h2 className="text-center m-0 p-0 w-100 mb-2">{t("welcome_to_settify")}</h2>
            <div className="row">
                <div className="col-12 col-md-4 m-0">
                    <LatestItemsList />
                </div>
                <div className="col-12 col-md-4 m-0">
                    <LargestCollections />
                </div>
                <div className="col-12 col-md-4 m-0">
                    <TagCloud />
                </div>
            </div>
        </div>
    );
}

// Main page contains:
// list of lastest items (name, collection, author);
// list of the top 5 largest collections;
// tag cloud (when the user clicks on the tag you display the list of items — in general you should use “search results page” for it).
