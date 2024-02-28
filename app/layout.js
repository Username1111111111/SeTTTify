import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./lib/bootstrapClient";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SeTTTify",
  description: "App for managing personal collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <BootstrapClient/>
    </html>
  );
}
