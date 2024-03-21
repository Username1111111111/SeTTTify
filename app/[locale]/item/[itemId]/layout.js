import Sidebar from "@/ui/collections/sidebar";
import getUserByItemId from "@/lib/getUserByItemId"

export default async function ItemLayout({ children, params }) {
    const userId = await getUserByItemId(params.itemId);

    return (
        <>
            <Sidebar userId={userId}/>
            <div className="col-12 col-md-9 m-0 p-0 d-flex justify-content-center">{children}</div>
        </>
    );
}
