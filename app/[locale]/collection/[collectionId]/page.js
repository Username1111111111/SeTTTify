import ItemList from "@/ui/items/itemList";

export default function CollectionPage({ params }) {
    const collectionId = params.collectionId;

    return <ItemList collectionId={collectionId} />;
}
