import DeletePage from "@/ui/deletePage";


export default function ItemPage({ params }) {
    const itemId = params.itemId;
    const idType = "item";

    return <DeletePage id={itemId} idType={idType}/>
    
}