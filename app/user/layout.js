import Sidebar from "../ui/collections/sidebar";

export default function UserLayout({ children }) {
    return (
        <>
            <Sidebar />
            <div className="col-12 col-md-9">{children}</div>
        </>
    );
}
