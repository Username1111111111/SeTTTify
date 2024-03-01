"use client";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

export default function Body({ children }) {
    return (
        <>
            <body className="container-fluid">
                <Header />
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Sidebar />
                    </div>
                    <main className="col-12 col-md-9">{children}</main>
                </div>
            </body>
        </>
    );
}
