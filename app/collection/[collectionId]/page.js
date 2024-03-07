"use client"
import ItemList from "@/app/ui/items/itemList";
import { useParams } from "next/navigation";

export default function CollectionPage() {
    const params = useParams();
    const collectionId = params.collectionId;

    if (collectionId == 'create') {
        return <div>Create Collection</div>
    } else {
        return <ItemList/>;
    }
    
}