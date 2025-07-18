import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { AuthProvider } from "../context/";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upside Admin",
  description: "Admin portal for Upside",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AuthProvider> */}

        {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
