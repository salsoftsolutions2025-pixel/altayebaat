import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Inter } from "next/font/google";
import "./globals.css";
import SiteConsentGate from "@/components/SiteConsentGate";

const arabicFont = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const englishFont = Inter({
  subsets: ["latin"],
  variable: "--font-english",
  display: "swap",
});

export const metadata: Metadata = {
  title: "نظام الطيبات | Al-Tayyibat System",
  description:
    "الموقع الرقمي لنظام الطيبات وإرث الدكتور ضياء العوضي رحمه الله.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${arabicFont.variable} ${englishFont.variable}`}
    >
      <body>
  <SiteConsentGate>
    {children}
  </SiteConsentGate>
</body>
    </html>
  );
}