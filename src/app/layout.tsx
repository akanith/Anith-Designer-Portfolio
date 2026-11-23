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
    default: "ThinkLoom | Design and Printing — Beyond Design. Into Reality.",
    template: "%s | ThinkLoom",
  },
  description: "ThinkLoom is an official design and printing studio combining graphic design, digital & offset multicolour printing, and generative AI video creation.",
  keywords: [
    "ThinkLoom",
    "Design and Printing",
    "Graphic Design",
    "Multicolour Printing",
    "Offset Printing",
    "AI Video Advertisements",
    "Brand Identity",
    "Commercial Posters",
    "Jewellery Branding",
    "Sports Branding",
    "Tamil Nadu",
    "Chennai",
    "Dindigul",
  ],
  authors: [{ name: "ThinkLoom" }],
  creator: "ThinkLoom",
  icons: {
    icon: "/images/brand/thinkloom-logo.png",
    apple: "/images/brand/thinkloom-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thinkloom.design",
    title: "ThinkLoom | Design and Printing — Beyond Design. Into Reality.",
    description: "From distinctive graphic design to multicolour printing and AI-powered advertisements, we bring creative ideas into reality.",
    siteName: "ThinkLoom",
    images: [
      {
        url: "/images/brand/thinkloom-printing-dark.png",
        width: 1254,
        height: 1254,
        alt: "ThinkLoom Design and Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkLoom | Design and Printing — Beyond Design. Into Reality.",
    description: "From distinctive graphic design to multicolour printing and AI-powered advertisements, we bring creative ideas into reality.",
    images: ["/images/brand/thinkloom-printing-dark.png"],
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
