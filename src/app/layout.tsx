import type {Metadata} from "next";
import {Caveat, DM_Sans, Playfair_Display} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ClerkProvider,} from '@clerk/nextjs';
import React, {Suspense} from 'react';
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const caveat = Caveat({
    subsets: ["latin"],
    variable: "--font-caveat",
});

export const metadata: Metadata = {
    title: "Uttarakhand Culture",
    description: "Explore the culture and beauty of the Himalayas",
    icons: {icon: "/Mountain.svg"},
};

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={`${dmSans.variable} ${playfair.variable} ${caveat.variable} antialiased paper-bg`}>
            <Navbar/>
            <Suspense fallback={
                <div role="status" aria-live="polite" className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <Image src="/Mountain.svg" alt="Loading..." width={120} height={120} priority fetchPriority={"high"} />
                </div>}>
                {children}
                <Analytics />
                <SpeedInsights />
            </Suspense>
            <Footer/>
            </body>
            </html>
        </ClerkProvider>
    );
}
