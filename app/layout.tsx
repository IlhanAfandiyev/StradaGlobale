import type { Metadata } from "next";
import Navbar from "@/app/Components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strada Globale",
  description: "Your travel partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}