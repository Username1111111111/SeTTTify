import Sidebar from "@/ui/collections/sidebar";
import React from "react";

export default async function UserLayout({ children, params }) {

    let userId = params.userId;

    return (
        <>
            <Sidebar userId={userId} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">
                {children}
            </div>
        </>
    );
}
