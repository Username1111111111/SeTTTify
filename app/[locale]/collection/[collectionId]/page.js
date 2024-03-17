import ItemList from "@/ui/items/itemList";
import CollectionEdit from "@/ui/collections/collectionEdit";


export default function CollectionPage({params}) {

    const collectionId = params.collectionId;

    if (collectionId == "create") {
        return <CollectionEdit collectionId={collectionId} />;
    } else {
        return <ItemList collectionId={collectionId}/>;
    }
}
