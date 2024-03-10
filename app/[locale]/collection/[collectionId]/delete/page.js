"use client"
import DeletePage from "@/ui/deletePage";
import { useParams } from "next/navigation";


export default function Page() {
    const params = useParams();
    const collectionId = params.collectionId;
    const idType = "collection";

    return <DeletePage id={collectionId} idType={idType}/>
    
}