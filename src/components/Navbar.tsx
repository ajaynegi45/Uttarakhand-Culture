"use client";

import {useEffect, useState} from "react";
import {Menu, Mountain, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Link from "next/link";

import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton,} from '@clerk/nextjs'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        {name: "Home", href: "/"},

        {name: "Explore", href: "/explore"},
        {name: "Districts", href: "/explore/districts"},
        // {name: "Rulers", href: "/explore/rulers"},
        // {name: "Recipes", href: "/explore/recipes"},
        // {name: "Temples", href: "/explore/temples"},
        {name: "About", href: "/about"},
        {name: "Support", href: "/about/support"},
        // {name: "Contribute", href: "/about/contribute"},
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2 py-4",
                    isScrolled || !isHome || isMobileMenuOpen
                        ? "bg-background/90 backdrop-blur-md border-b border-white/20 shadow-lg py-3 text-foreground"
                        : "bg-transparent text-white"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/"
                          className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer z-50 relative">
                        <Mountain
                            className={cn("h-8 w-8", (isScrolled || !isHome || isMobileMenuOpen) ? "text-secondary" : "text-white")}/>
                        <span>Uttarakhand<span
                            className={cn((isScrolled || !isHome || isMobileMenuOpen) ? "text-secondary" : "text-white")}>Culture</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium tracking-wide hover:text-secondary transition-colors relative group",
                                    isScrolled || !isHome ? "text-foreground" : "text-white/90 hover:text-white",
                                    pathname === link.href && "text-secondary font-bold"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all group-hover:w-full",
                                    pathname === link.href ? "w-full" : "w-0"
                                )}/>
                            </Link>
                        ))}

                        <header className={"flex items-center authentication"}>
                            <SignedOut>
                                {/*<SignInButton />*/}
                                <SignInButton>
                                    <Button
                                        variant={isScrolled || !isHome ? "default" : "secondary"}
                                        className="rounded-full px-5 h-9 cursor-pointer"
                                    >
                                        SignIn
                                    </Button>
                                </SignInButton>
                            </SignedOut>

                            <SignedIn>
                                <UserButton/>
                            </SignedIn>
                        </header>
                        {/*<Link href="/contact">*/}
                        {/*    <Button*/}
                        {/*        variant={isScrolled || !isHome ? "default" : "secondary"}*/}
                        {/*        className="rounded-full px-6"*/}
                        {/*    >*/}
                        {/*        Contact Us*/}
                        {/*    </Button>*/}
                        {/*</Link>*/}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden pl-2 z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="text-foreground w-6 h-6"/>
                        ) : (
                            <Menu
                                className={cn("w-6 h-6", (isScrolled || !isHome) ? "text-foreground" : "text-white")}/>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Overlay - Outside nav to fix z-index stacking */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 top-[20px] bg-background z-40 flex flex-col justify-start items-center lg:hidden pt-20 overflow-scroll">
                    <div className="flex flex-col gap-5 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-3xl font-serif font-medium hover:text-secondary transition-transform hover:scale-105",
                                    pathname === link.href ? "text-secondary" : "text-foreground"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}


                        <header className={"flex items-center justify-center text-center"}>
                            <SignedOut>
                                {/*<SignInButton />*/}
                                <SignUpButton>
                                    <Button
                                        variant={isScrolled || !isHome ? "default" : "secondary"}
                                        className="rounded-full px-6 cursor-pointer"
                                    >
                                        Sign Up
                                    </Button>
                                </SignUpButton>
                            </SignedOut>

                            <SignedIn>
                                <UserButton>Profile</UserButton>
                            </SignedIn>
                        </header>


                        {/*<div className="pt-8">*/}
                        {/*    <Link href="/contact">*/}
                        {/*        <Button size="lg" className="rounded-full px-8 text-lg"*/}
                        {/*                onClick={() => setIsMobileMenuOpen(false)}>*/}
                        {/*            Contact Us*/}
                        {/*        </Button>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            )}
        </>
    );
}
