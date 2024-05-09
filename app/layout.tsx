import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "ExploreX",
  description: "Travel Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}
      overflow-x-hidden bg-light`}>
        <NavBar />
        {children}</body>
    </html>
  );
}
