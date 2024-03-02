import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./lib/bootstrapClient";
import Body from "./ui/body";

export const metadata = {
    title: "SeTTTify",
    description: "App for managing personal collections",
};

// https://getbootstrap.com/docs/5.3/customize/color-modes/

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
            <script dangerouslySetInnerHTML={{ __html: `
                    (function () {
                        var theme = localStorage.getItem("theme") || "light";
                        document.documentElement.setAttribute("data-bs-theme", theme);
                    })();
                `}} />
            </head>
            <Body>{children}</Body>
            <BootstrapClient />
        </html>
    );
}
