"use client";
import Header from "./header/header";
import Sidebar from "./collections/sidebar";

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
                <main className="col-12 col-md-9 p-1 d-flex justify-content-center align-items-center">{children}</main>
            </div>
        </body>
    );
}
