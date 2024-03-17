import Sidebar from "@/ui/collections/sidebar";
import React from "react";

export default function UserLayout({ children, userId, params }) {

    let id;
    if (!userId || userId === undefined || userId === null) {
        id = params.userId;
    } else {
        id = userId;
    }

    return (
        <>
            <Sidebar userId={id} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">
                {children}
            </div>
        </>
    );
}
