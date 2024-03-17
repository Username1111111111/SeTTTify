import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/lib/bootstrapClient";
import "./globals.css";
import Body from "./body";

export const metadata = {
    title: "SeTTTify",
    description: "App for managing personal collections",
};

// https://getbootstrap.com/docs/5.3/customize/color-modes/

export default async function RootLayout({ children, locale }) {
    return (
        <html lang={locale} suppressHydrationWarning={true}>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    (function () {
                        var theme = localStorage.getItem("theme") || "light";
                        document.documentElement.setAttribute("data-bs-theme", theme);
                    })();
                `,
                    }}
                />
            </head>
            <Body>{children}</Body>
            <BootstrapClient />
        </html>
    );
}
