"use client"
import ItemCard from "@/ui/items/itemCard";
import ItemCardEdit from "@/ui/items/itemCardEdit";
import { useParams } from "next/navigation";

export default function ItemPage() {
    const params = useParams();
    const itemId = params.itemId;

    if (itemId == 'create') {
        return <ItemCardEdit/>
    } else {
        return <ItemCard/>;
    }

    
}
