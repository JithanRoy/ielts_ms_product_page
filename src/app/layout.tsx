import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "../components/sections/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansBengali = Noto_Sans_Bengali({ subsets: ["bengali"], weight: ["400", "500", "700"], variable: "--font-noto-sans-bengali" });

export const metadata: Metadata = {
  title: "IELTS Course by Munzereen Shahid",
  description: "Get complete preparation of Academic IELTS and General Training IELTS in one course!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansBengali.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}