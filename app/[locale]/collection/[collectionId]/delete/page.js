import DeletePage from "@/ui/deletePage";

export default function CollectionPage({ params }) {
    const collectionId = params.collectionId;
    const idType = "collection";

    return <DeletePage id={collectionId} idType={idType}/>
    
}