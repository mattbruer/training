import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Provider";
import Auth from "@/components/Auth";
import React from "react";
import SocketWrap from "@/components/SocketWrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matt and Shanna",
  lang: "en",
  description: "A communications dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {/* <div
          style={{ position: "absolute", top: "var(--nav-container-height)" }}
        >
          {children}
        </div> */}
        <SocketWrap>
          <Providers>
            <div>{children}</div>
          </Providers>
        </SocketWrap>
      </body>
    </html>
  );
}
