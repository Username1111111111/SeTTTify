import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./lib/bootstrapClient";
import "./globals.css";
import Body from "./ui/body";

export const metadata = {
    title: "SeTTTify",
    description: "App for managing personal collections",
};

// https://getbootstrap.com/docs/5.3/customize/color-modes/

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Body>{children}</Body>
            <BootstrapClient />
        </html>
    );
}
