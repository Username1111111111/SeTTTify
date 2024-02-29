import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./lib/bootstrapClient";
import "./globals.css";
import Body from "./ui/body";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SeTTTify",
    description: "App for managing personal collections",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-bs-theme="light">
            <Body>{ children }</Body>
            <BootstrapClient />
        </html>
    );
}
