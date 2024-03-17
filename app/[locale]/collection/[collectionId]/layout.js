import Sidebar from "@/ui/collections/sidebar";
import getUserByCollectionId from "@/lib/getUserByCollectionId";

export default async function CollectionLayout({ children, params }) {
    const userId = await getUserByCollectionId(params.collectionId);

    return (
        <>
            <Sidebar userId={userId} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">
                {children}
            </div>
        </>
    );
}
