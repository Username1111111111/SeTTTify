"use client";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

export default function Body({ children }) {
    return (
        <body className="container-fluid">
            <div className="row">
                <Header />
            </div>

            <div className="row">
                <div className="col-12 col-md-3 border border-secondary border-top-0 p-0">
                    <Sidebar />
                </div>
                <main className="col-12 col-md-9 p-1">{children}</main>
            </div>
        </body>
    );
}
