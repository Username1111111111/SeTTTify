"use client";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        dark: "#007bff",
        light: "#6c757d",
    },
    // ... other theme properties
};

export default function Body({ children }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <body className="container-fluid">
                    <Header/>
                    <div className="row">
                        <div className="col-12 col-md-2">
                            <Sidebar/>
                        </div>
                        <main className="col-12 col-md-10">{children}</main>
                    </div>
                </body>
            </ThemeProvider>
        </>
    );
}
