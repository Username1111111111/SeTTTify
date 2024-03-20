import LargestCollection from "./largestCollection";
import { useTranslations } from "next-intl";
import getCollectionsLargest from "@/lib/getCollectionsLargest";

function createLargestCollections(collections) {
    const allCollections = [];

    if (!Array.isArray(collections)) {
        return <ul className="row w-100 p-0 m-0"><li className="text-center">Failed to fetch largest collections</li></ul>;
    }

    collections.map((collection) => {
        allCollections.push(
            <LargestCollection
                key={collection.id}
                collectionId={collection.id}
                name={collection.name}
                itemsCount={collection._count.items}
            />
        );
    });

    return <ul className="row w-100 p-0 m-0">{allCollections}</ul>;
}

export default async function LargestCollections() {
    const t = useTranslations("Home");

    const collections = await getCollectionsLargest(5);

    return (
        <div className="border border-secondary rounded p-1 m-md-0 mt-4 bg-body-secondary">
            <h4 className="text-center mt-2">{t("largest_collections")}</h4>
            <hr />
            {createLargestCollections(collections)}
        </div>
    );
}

// list of the top 5 largest collections
