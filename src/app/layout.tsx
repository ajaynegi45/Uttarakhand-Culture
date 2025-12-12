import type {Metadata} from "next";
import {Toaster} from "sonner";
import {Caveat, DM_Sans, Playfair_Display} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ClerkProvider,} from '@clerk/nextjs'

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
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=DM+Sans:opsz,wght@9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"/>
                <link rel="icon" href="./Mountain.svg"/>
            </head>
            <body className={`${dmSans.variable} ${playfair.variable} ${caveat.variable} antialiased paper-bg`} >
                <Navbar/>
                    {children}
                <Toaster position="bottom-right" richColors={true}/>
                <Footer/>
            </body>
            </html>
        </ClerkProvider>
    );
}
