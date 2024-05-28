import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import AuthContext from "@/context/Authcontext";
import getCurentUser from "./actions/getCurrentUser";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "ExploreX",
  description: "Travel Blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getCurentUser()
  return (
    <html lang="en">
      <AuthContext>
        <body
          className={`${roboto.className}
      overflow-x-hidden bg-light`}
        >
          <NavBar user={user}/>
          {children}
          <Footer />
        </body>
      </AuthContext>
    </html>
  );
}
