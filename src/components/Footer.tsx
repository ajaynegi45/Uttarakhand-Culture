import {Heart, Instagram, Linkedin, Mountain, Twitter,} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-primary text-white pt-20 pb-0 px-0 relative overflow-hidden rounded-t-3xl border-t md:rounded-t-[4rem]">
            {/* Abstract decorative circle */}
            <div
                className="absolute top-0 right-0 w-96 h-96  bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"/>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 mb-16 px-4">
                <div className="col-span-1 md:col-span-2 ">
                    <div className="flex items-center gap-2 font-serif text-2xl font-bold mb-6">
                        <Mountain className="h-8 w-8 text-secondary"/>
                        <span>Uttarakhand Culture</span>
                    </div>
                    <p className="text-white/70 max-w-md leading-relaxed mb-8">
                        Preserving the stories, culture, and spirit of Uttarakhand.
                        A digital archive for the future generations to connect with their roots.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                            >
                                <Icon className="w-5 h-5"/>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-serif text-lg font-bold mb-6 text-accent">Explore</h3>
                    <ul className="space-y-4 text-white/70">
                        {/*<li><Link href="#" className="hover:text-white transition-colors">Heritage & History</Link></li>*/}
                        {/*<li><Link href="#" className="hover:text-white transition-colors">Folk Tales</Link></li>*/}
                        {/*<li><Link href="#" className="hover:text-white transition-colors">Spiritual Sites</Link></li>*/}
                        {/*<li><Link href="#" className="hover:text-white transition-colors">Cuisine</Link></li>*/}

                        <li><Link href="/explore/districts" className="hover:text-white transition-colors hover:pl-1">Districts</Link></li>
                        <li><Link href="/explore/rulers" className="hover:text-white transition-colors hover:pl-1">Rulers</Link></li>
                        <li><Link href="/explore/recipes" className="hover:text-white transition-colors hover:pl-1">Recipes</Link></li>
                        <li><Link href="/explore/temples" className="hover:text-white transition-colors hover:pl-1">Temples</Link></li>
                        <li><Link href="/languages" className="hover:text-white transition-colors hover:pl-1">Languages</Link></li>

                    </ul>
                </div>

                {/*<div>*/}
                {/*    <h3 className="font-serif text-lg font-bold mb-6 text-accent">Community</h3>*/}
                {/*    <ul className="space-y-4 text-white/70">*/}
                {/*        <li><Link href="#" className="hover:text-white transition-colors">Share a Story</Link></li>*/}
                {/*        <li><Link href="#" className="hover:text-white transition-colors">Suggest a Place</Link></li>*/}
                {/*        <li><Link href="#" className="hover:text-white transition-colors">Artisan Network</Link></li>*/}
                {/*        <li><Link href="#" className="hover:text-white transition-colors">Events Calendar</Link></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                <div>
                    <h3 className="font-serif text-lg font-bold mb-6 text-accent">Community</h3>
                    <ul className="space-y-4 text-white/70">
                        <li><Link href="/about" className="hover:text-white transition-colors hover:pl-1 ">About Us</Link></li>
                        <li><Link href="/about/support" className="hover:text-white transition-colors hover:pl-1">Support</Link></li>
                        <li><Link href="/about/contribute" className="hover:text-white transition-colors hover:pl-1">Contribute</Link></li>
                        {/*<li><Link href="#" className="hover:text-white transition-colors">Events Calendar</Link></li>*/}
                    </ul>
                </div>

            </div>

            <div
                className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                <p className={"px-4"}>&copy; 2023 - {currentYear} Uttarakhand Culture</p>
                <div className="flex items-center gap-2 px-4">
                    <span>Made with</span>
                    <Heart className="w-4 h-4 text-secondary fill-secondary"/>
                    <span>in the mountains</span>
                </div>
            </div>

            <section className={"relative text-center text-gray-100 flex flex-col items-center justify-center pt-10  text-[1.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[1] pointer-events-none font-bold -mb-1 sm:-mb-5 opacity-40"}>
                 <span
                     className="inline-block"
                     style={{
                         color: "hsl(165,40%,27%)",
                         textShadow:
                             "6px 6px 12px rgba(0,0,0,0.55), -6px -6px 12px rgba(255,255,255,0.09)",
                         WebkitTextStroke: "1px rgba(255,255,255,0.04)",
                         userSelect: "none",
                         WebkitUserSelect: "none",
                         MozUserSelect: "none",
                         msUserSelect: "none",
                     }}
                 >Uttarakhand Culture</span>
            </section>
        </footer>
    );
}
