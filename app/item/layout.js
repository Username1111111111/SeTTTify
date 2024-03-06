import Sidebar from "../ui/collections/sidebar";

export default function ItemLayout({ children }) {
    return (
        <>
            <Sidebar />
            <div className="col-12 col-md-9 m-0 p-0 d-flex justify-content-center">{children}</div>
        </>
    );
}
