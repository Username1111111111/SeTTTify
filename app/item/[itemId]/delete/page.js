"use client"
import DeletePage from "@/app/ui/deletePage";
import { useParams } from "next/navigation";


export default function Page() {
    const params = useParams();
    const itemId = params.itemId;
    const idType = "item";

    return <DeletePage id={itemId} idType={idType}/>
    
}