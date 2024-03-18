import Sidebar from "@/ui/collections/sidebar";

export default async function ItemLayout({ children }) {

    let currentSessionUserId = '7a3162da-edee-4de8-a2c6-529397a16c4e';

    return (
        <>
            <Sidebar userId={currentSessionUserId}/>
            <div className="col-12 col-md-9 m-0 p-0 d-flex justify-content-center">{children}</div>
        </>
    );
}
