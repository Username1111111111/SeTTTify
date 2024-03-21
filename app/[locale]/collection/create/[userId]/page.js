import Sidebar from "@/ui/collections/sidebar";
import CollectionEdit from "@/ui/collections/collectionEdit";

export default async function CollectionCreatePage({ params }) {
    const userId = params.userId;
    const mode = "create";
    // let currentSessionUserId = '7a3162da-edee-4de8-a2c6-529397a16c4e';

    return (
        <>
            <Sidebar userId={userId} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">
            <CollectionEdit userId={userId} mode={mode} />
            </div>
        </>
    );
}
