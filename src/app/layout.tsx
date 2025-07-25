import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
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
    <body className={`${hindSiliguri.variable} antialiased`}>
    <div>
      {children}
    </div>
    </body>
    </html>
  );
}