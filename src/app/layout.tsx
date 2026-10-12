import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono, Caveat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const brush = Caveat({
  subsets: ["latin"],
  variable: "--font-brush",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thinkloom.design"),
  title: {
    default: `${siteConfig.designer} / ${siteConfig.brand} — Graphic Design & Visual Storyteller Portfolio`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: `${siteConfig.heroHeadline} ${siteConfig.heroSupporting}`,
  keywords: [
    "Anith",
    "ThinkLoom",
    "3D Designer",
    "Creative Developer",
    "Brand Identity",
    "Advertising Posters",
    "Product Campaigns",
    "Jewellery Branding",
    "Sports Branding",
    "AI Video Motion",
    "Three.js Portfolio",
  ],
  authors: [{ name: "Anith" }, { name: "ThinkLoom" }],
  creator: "Anith",
  icons: {
    icon: "/images/raw/Think Loom.png",
    apple: "/images/raw/Think Loom.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thinkloom.design",
    title: `${siteConfig.designer} / ${siteConfig.brand} — ${siteConfig.heroHeadline}`,
    description: siteConfig.heroSupporting,
    siteName: siteConfig.brand,
    images: [
      {
        url: "/images/raw/Think Loom.png",
        width: 1200,
        height: 1200,
        alt: "ThinkLoom / Anith Creative Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.designer} / ${siteConfig.brand} — Experimental 3D Designer Portfolio`,
    description: siteConfig.heroSupporting,
    images: ["/images/raw/Think Loom.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable} ${brush.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen bg-canvas text-ink antialiased relative selection:bg-accent-coral selection:text-white">
        {/* Custom pointer cursor for desktop */}
        <CustomCursor />

        {/* Ambient grain texture */}
        <div className="grain-overlay fixed inset-0 z-30 pointer-events-none opacity-40" />

        {/* Floating Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className="relative z-10 w-full flex-grow">{children}</div>
      </body>
    </html>
  );
}
