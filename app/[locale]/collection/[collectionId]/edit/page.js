import CollectionEdit from "@/ui/collections/collectionEdit";

export default function CollectionPage({params}) {
    const mode = "edit";
    
    return <CollectionEdit collectionId={params.collectionId} mode={mode}/>;
}