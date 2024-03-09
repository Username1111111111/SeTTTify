"use client"
import ItemList from "@/app/ui/items/itemList";
import { useParams } from "next/navigation";
import CollectionEdit from "@/app/ui/collections/collectionEdit";

export default function CollectionPage() {
    const params = useParams();
    const collectionId = params.collectionId;

    if (collectionId == 'create') {
        return <CollectionEdit/>
    } else {
        return <ItemList/>;
    }
    
}