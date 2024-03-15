"use client"
import ItemList from "@/ui/items/itemList";
import { useParams } from "next/navigation";
import CollectionEdit from "@/ui/collections/collectionEdit";

export default function CollectionPage() {
    const params = useParams();
    const collectionId = params.collectionId;

    if (collectionId == 'create') {
        return <CollectionEdit collectionId={collectionId}/>
    } else {
        return <ItemList collectionId={collectionId}/>;
    }
    
}