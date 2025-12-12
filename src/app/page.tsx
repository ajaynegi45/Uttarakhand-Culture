"use client";

import {getUpcomingEvents} from "@/data/getUpcomingEvents";
import danceImg from "@/assets/choliya_folk_dancers.png";
import nandaImg from "@/assets/nanda_devi_peak_majestic_view.png";
import foodImg from "@/assets/traditional_pahadi_cuisine_thali.png";
import aipanTexture from "@/assets/traditional_aipan_art_texture.png";
import templeImg from "@/assets/kedarnath_temple_spiritual_scene.png";
import backgroundImg from "@/assets/majestic_himalayan_sunrise_hero_background.png";

import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {ThreeDEventCarousel} from "@/components/ThreeDEventCarouselProps";

import Link from "next/link";
import Image from 'next/image';
import {useRouter} from "next/navigation";

import {motion} from "framer-motion";
import {ArrowDown, ArrowRight, Music, Sparkles} from "lucide-react";


export default function Home() {

    const router = useRouter();


    const festivalEvents = getUpcomingEvents();


    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image with Parallax feel */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{scale: 1.9}}
                    animate={{scale: 1}}
                    transition={{duration: 10, ease: "easeOut"}}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat home-hero-image"
                        // style={{ backgroundImage: `url(${backgroundImg.src})` }}
                    ><Image src={backgroundImg} alt="Uttarakhand-Culture-Hero Image"
                            fill
                            priority
                            className="object-cover home-hero-image"
                            placeholder={"blur"}
                    />

                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60"/>
                </motion.div>

                {/* Content */}
                <div
                    className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white home-hero-content">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}>

                        <span className="font-hand text-3xl md:text-4xl text-accent mb-4 block transform -rotate-2 "
                              style={{textShadow: '2px 3px 6px rgba(0,0,0,0.25)'}}>
                            Welcome to the Land of Gods
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tight mb-6 drop-shadow-lg">
                            Discover <span
                            className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/80">Uttarakhand</span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-light leading-relaxed mb-8">
                            Where the mountains whisper ancient tales, and every path leads to a spiritual journey.
                            Explore the heritage, culture, and untamed beauty of the Himalayas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button onClick={() => router.push("/explore")} size="lg"
                                    className="cursor-pointer rounded-full text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-white border-none shadow-lg shadow-secondary/20">
                                Start the Journey
                            </Button>

                            {/*<Button onClick={() => router.push("/support")} size="lg" variant="outline"*/}
                            {/*        className="cursor-pointer rounded-full text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">*/}
                            {/*    Support us*/}
                            {/*</Button>*/}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 z-10 flex flex-col items-center gap-2 cursor-pointer"
                    animate={{y: [0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 2}}
                    onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
                >
                    <span className="text-xs uppercase tracking-widest font-medium">Scroll to Explore</span>
                    <ArrowDown className="w-5 h-5"/>
                </motion.div>
            </div>


            {/* Introduction with Parallax Reveal */}
            <Section centered className="bg-white relative">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-100px"}}
                    transition={{duration: 0.8}}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="font-hand text-3xl text-secondary mb-2 block">Namaste</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-primary">
                        The Soul of the Himalayas
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                        Uttarakhand is not just a place; it&#39;s a feeling. It&#39;s the echo of temple bells in the
                        morning mist,
                        the warmth of a wood-fired stove in a village home, and the rhythm of folk songs that have been
                        sung for centuries. Here, we invite you to explore the unseen and unheard stories of this divine
                        land.
                    </p>
                </motion.div>
            </Section>


            {/*Festivals • Fairs • Cultural Events*/}
            <Section pattern className="bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-2 block">
                            Events Calendar
                        </span>
                        <h2 className="text-4xl font-serif font-bold text-primary">
                            Upcoming Festivals & Fairs
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-base">
                            Discover upcoming celebrations that bring communities, rituals, and seasons together.
                        </p>
                    </div>
                    <ThreeDEventCarousel events={festivalEvents}/>
                </div>
            </Section>


            {/* Languages Section */}
            <Section id="heritage" title="Voices of the Hills" subtitle="Our Languages" className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            lang: "Kumaoni",
                            desc: "Spoken in the Kumaon region, known for its sweet intonation and rich folklore.",
                            greeting: "Kas chho?",
                            link: "/languages/kumaoni"
                        },
                        {
                            lang: "Garhwali",
                            desc: "The language of the Garhwal kingdom, carrying the boldness of its warriors.",
                            greeting: "Kya haal chaan?",
                            link: "/languages/garhwali"
                        },
                        {
                            lang: "Jaunsari",
                            desc: "A unique dialect from the Jaunsar-Bawar region, rich in tribal heritage.",
                            greeting: "Jwai!",
                            link: "/languages/jaunsari"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.lang}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: i * 0.2, duration: 0.5}}
                            viewport={{once: true}}
                        >
                            <Link href={item.link} className="block h-full">
                                <Card
                                    className="h-full border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group bg-gray-50 cursor-pointer">
                                    <div
                                        className="h-2 bg-secondary w-0 group-hover:w-full transition-all duration-500"/>
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <h3 className="text-2xl font-serif font-bold mb-2 text-primary">{item.lang}</h3>
                                        <p className="text-muted-foreground mb-6 flex-grow">{item.desc}</p>
                                        <div
                                            className="bg-white p-4 rounded-lg border border-border/50 group-hover:bg-secondary/5 transition-colors shadow-sm">
                                            <span
                                                className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Say Hello</span>
                                            <p className="text-xl font-hand text-secondary font-bold">&#34;{item.greeting}&#34;</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>


            {/* Folklore Section - Parallax Reveal Style */}
            <Section id="stories" title="Echoes of the Past" subtitle="Folklore & Legends">
                <div className="relative">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <motion.div
                            className="md:w-1/2 space-y-6"
                            initial={{opacity: 0, x: -50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                        >
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                                <Sparkles className="w-4 h-4"/>
                                Featured Story
                            </div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">The Legend of Nanda
                                Devi</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Revered as the patron goddess of the Garhwal and Kumaon Himalayas, Nanda Devi is not
                                just a peak but a divine entity.
                                Legend has it that she was a princess who escaped a roguish prince to merge with the
                                mountains, becoming their eternal guardian.
                                Every 12 years, the Nanda Devi Raj Jat Yatra celebrates her journey back to her
                                husband&#39;s home in Kailash.
                            </p>
                            <Link href="/god/nanda-devi">
                                <Button variant="link"
                                        className="text-secondary p-0 text-lg h-auto font-serif italic hover:underline">
                                    Read full legend <ArrowRight className="w-4 h-4 ml-2"/>
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="md:w-1/2 relative"
                            initial={{opacity: 0, x: 50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                        >
                            <Link href="/god/nanda-devi">
                                <div
                                    className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 group cursor-pointer">
                                    <Image
                                        src={nandaImg}
                                        alt="Nanda Devi Peak"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                        <p className="text-white font-medium text-lg">The Bliss-Giving Goddess</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </Section>


            {/* Culture Showcase (Masonry Grid) */}
            <Section id="culture" title="Living Traditions" subtitle="Culture & Lifestyle">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">

                    {/* Large Item - Temple */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        className="md:col-span-8 row-span-2 relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
                    >
                        <Link href="/explore/temples" className="block w-full h-full">
                            <Image src={templeImg} alt="Spiritual Heritage"
                                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <span
                                    className="text-secondary font-medium tracking-wider uppercase text-xs mb-2">Spiritual</span>
                                <h3 className="text-3xl font-serif font-bold text-white mb-2">Abodes of the Divine</h3>
                                <p className="text-white/80 max-w-lg line-clamp-2">From the Char Dham to hidden village
                                    temples, spirituality is woven into every stone.</p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Medium Item - Aipan Art */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{delay: 0.1}}
                        viewport={{once: true}}
                        className="md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
                    >
                        <Link href="/explore" className="block w-full h-full">
                            <Image src={aipanTexture} alt="Aipan Art"
                                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                            <div
                                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Aipan Art</h3>
                                    <Button variant="outline"
                                            className="text-white border-white hover:bg-white hover:text-black">Learn
                                        Technique</Button>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Medium Item - Food */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{delay: 0.2}}
                        viewport={{once: true}}
                        className="md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
                    >
                        <Link href="/explore/recipes" className="block w-full h-full">
                            <Image src={foodImg.src} alt="Pahadi Cuisine" fill
                                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-serif font-bold text-white">Pahadi Zayka</h3>
                                <p className="text-white/70 text-sm">Simple, nutritious, and divine.</p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Wide Item - Dance */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        viewport={{once: true}}
                        className="md:col-span-12 row-span-1 relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
                    >
                        <Link href="/explore" className="block w-full h-full">
                            <Image src={danceImg} alt="Folk Dance"
                                   className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent p-8 flex flex-col justify-center">
                                <div className="max-w-xl">
                                    <span
                                        className="text-accent font-medium tracking-wider uppercase text-xs mb-2">Celebration</span>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-4">Rhythms of the
                                        Mountains</h3>
                                    <p className="text-white/80 mb-6">
                                        When the Dhol-Damau plays, the feet don&#39;t stop. Explore the vibrant folk
                                        dances like Choliya, Jhora, and Chancheri.
                                    </p>
                                    <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
                                        <Music className="w-4 h-4 mr-2"/> Listen to Folk Music
                                    </Button>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                </div>
            </Section>
        </>
    );
}
