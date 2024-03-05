"use client";
import Header from "./ui/header/header";

export default function Body({ children }) {
    return (
        <body className="container-fluid">
            <div className="row">
                <Header />
            </div>
            <main className="w-100 p-0 m-0">
                <div className="row">{children}</div>
            </main>
        </body>
    );
}
