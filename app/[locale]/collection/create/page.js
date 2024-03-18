import CollectionEdit from "@/ui/collections/collectionEdit";


export default function CollectionPage() {
    const mode = "create";
    let currentSessionUserId = '7a3162da-edee-4de8-a2c6-529397a16c4e';

    return <CollectionEdit userId={currentSessionUserId} mode={mode} />;

}
