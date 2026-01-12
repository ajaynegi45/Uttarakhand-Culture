"use client";

import {useState} from "react";
import { motion } from "motion/react"
import Section from "@/components/Section";
import {temples} from "@/data/temples";
import {Button} from "@/components/ui/button";

import {Filter, Flame, MapPin, Search} from "lucide-react";

import Image from 'next/image';
import Link from "next/link";

export default function TempleDirectory() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRegion, setFilterRegion] = useState<"All" | "Kumaon" | "Garhwal">("All");
    const [filterDistrict, setFilterDistrict] = useState<string>("All");

    const districts = Array.from(new Set(temples.map(t => t.district))).sort();

    const filteredTemples = temples.filter(temple => {
        const matchesSearch =
            temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            temple.deity.toLowerCase().includes(searchTerm.toLowerCase()) ||
            temple.district.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesRegion = filterRegion === "All" || temple.region === filterRegion;
        const matchesDistrict = filterDistrict === "All" || temple.district === filterDistrict;

        return matchesSearch && matchesRegion && matchesDistrict;
    });


    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <Section className="py-16 space-y-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-bold">Temple Directory</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Search and explore the sacred temples of Uttarakhand. Filter by region, district, or search by
                        name and deity.
                    </p>
                </motion.div>
            </Section>

            {/* Search & Filter Section */}
            <Section className="py-12 space-y-8">
                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                    <input
                        type="text"
                        placeholder="Search temples by name, deity, or district..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border/50 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Region Filter */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold flex items-center gap-2">
                            <Filter className="w-4 h-4"/>
                            Region
                        </label>
                        <div className="flex gap-2">
                            {["All", "Kumaon", "Garhwal"].map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setFilterRegion(region as "All" | "Kumaon" | "Garhwal")}
                                    className={`px-4 py-2 rounded-lg transition text-sm font-medium ${
                                        filterRegion === region
                                            ? "bg-primary text-white"
                                            : "bg-muted text-foreground hover:bg-muted/80"
                                    }`}
                                    data-testid={`filter-region-${region}`}
                                >
                                    {region}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* District Filter */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold flex items-center gap-2">
                            <MapPin className="w-4 h-4"/>
                            District
                        </label>
                        <select
                            value={filterDistrict}
                            onChange={(e) => setFilterDistrict(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-border/50 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition text-sm"
                            data-testid="filter-district"
                        >
                            <option value="All">All Districts</option>
                            {districts.map((district) => (
                                <option key={district} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="flex items-end">
                        <div className="text-sm text-muted-foreground">
                            <span
                                className="font-semibold text-foreground">{filteredTemples.length}</span> temple{filteredTemples.length !== 1 ? "s" : ""} found
                        </div>
                    </div>
                </div>
            </Section>

            {/* Temples Grid */}
            <Section className="py-12">
                {filteredTemples.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredTemples.map((temple, idx) => (
                            <motion.div
                                key={temple.id}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: idx * 0.1}}
                                className="group rounded-2xl overflow-hidden bg-white border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                                data-testid={`temple-card-${temple.id}`}
                            >
                                {/* Image Section */}
                                <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                                    <Image fill
                                           src={temple.image}
                                           alt={temple.name}
                                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="text-2xl font-serif font-bold mb-1">{temple.name}</h3>
                                        <div className="flex items-center gap-2 text-sm">
                                            <MapPin className="w-4 h-4"/>
                                            {temple.district}, {temple.region}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 space-y-4 flex flex-col">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Flame className="w-4 h-4 text-red-500"/>
                                            <span className="font-semibold">Deity:</span>
                                            <span>{temple.deity}</span>
                                        </div>
                                        <div className="flex gap-2">
                      <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold">
                        {temple.architecture}
                      </span>
                                            {temple.altitude && (
                                                <span
                                                    className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {temple.altitude}
                        </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                        {temple.description.substring(0, 120)}...
                                    </p>

                                    <div className="pt-4 border-t border-border/50">
                                        <Link href={`/explore/temples/${temple.id}`}>
                                            <Button variant="default" size="sm" className="w-full">
                                                Explore Temple →
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold mb-2">No temples found</h3>
                        <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </Section>
        </div>
    );
}
