import type { Metadata } from "next";
import {Hind_Siliguri, Inter, Noto_Sans_Bengali} from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

// 2. Instantiate Inter with its CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Defines var(--font-inter)
});

// 3. Instantiate Noto Sans Bengali with its CSS variable
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "700"], // Load the weights you need
  variable: "--font-noto-sans-bengali", // Defines var(--font-noto-sans-bengali)
});


export const metadata: Metadata = {
  title: "IELTS Course by Munzereen Shahid",
  description: "Get complete preparation of Academic IELTS and General Training IELTS in one course!",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.variable} ${notoSansBengali.variable} antialiased`}>
    <div>
      {children}
    </div>
    </body>
    </html>
  );
}