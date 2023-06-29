import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/nav/navbar";
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
      <body style={{ position: "relative" }} className={inter.className}>
        <Navbar />
        {/* <div
          style={{ position: "absolute", top: "var(--nav-container-height)" }}
        >
          {children}
        </div> */}
        <div className="mb-5">{children}</div>
      </body>
    </html>
  );
}
