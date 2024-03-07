"use client"
import ItemCard from "@/app/ui/items/itemCard";
import { useParams } from "next/navigation";

export default function ItemPage() {
    const params = useParams();
    const itemId = params.itemId;

    if (itemId == 'create') {
        return <div>Create</div>
    } else {
        return <ItemCard/>;
    }

    
}
