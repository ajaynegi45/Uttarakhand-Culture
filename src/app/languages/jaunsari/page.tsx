import Section from "@/components/Section";
import {Card, CardContent} from "@/components/ui/card";
import {BookOpen, MessageCircle, Play} from "lucide-react";

// https://grokipedia.com/page/Jaunsari_language

export default function Page() {
    return (
        <div className="min-h-screen bg-background">


            <section className="pt-32 pb-16 px-6 bg-linear-to-b from-purple-50 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="font-hand text-3xl text-secondary mb-2 block">Jaunsari Boli</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">
                        The Tribal Heritage
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Spoken by the Jaunsari tribe in the Jaunsar-Bawar region (Dehradun district), this language is
                        distinct and rich in tribal folklore.
                    </p>
                </div>
            </section>

            <Section>
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Basics */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">The Basics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {phrase: "Jwai!", meaning: "Greetings! (Respectful)", usage: "Greeting"},
                                {phrase: "Koro", meaning: "Boy", usage: "People"},
                                {phrase: "Kori", meaning: "Girl", usage: "People"},
                                {phrase: "Aau", meaning: "Come", usage: "Command"},
                                {phrase: "Bhoj", meaning: "Feast", usage: "Celebration"},
                                {phrase: "Mahasu", meaning: "Main Deity", usage: "Spiritual"},
                            ].map((item, i) => (
                                <div key={i}
                                     className="bg-white p-6 rounded-xl border border-border hover:border-secondary transition-colors shadow-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-primary">{item.phrase}</h3>
                                        <span
                                            className="text-xs uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">{item.usage}</span>
                                    </div>
                                    <p className="text-muted-foreground">{item.meaning}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cultural Context */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Cultural Significance</h2>
                        <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                            <p className="text-lg leading-relaxed text-purple-900 mb-4">
                                Jaunsari culture is unique because of its close association with the Mahasu Devta. The
                                language reflects their close-knit community structure and their vibrant festivals like &#39;Magh Mela&#39; and &#39;Bissu&#39;.
                            </p>
                            <p className="text-lg leading-relaxed text-purple-900">
                                Unlike Kumaoni and Garhwali, Jaunsari has preserved many ancient tribal words that trace
                                back to the Pandavas&#39; influence in the region.
                            </p>
                        </div>
                    </div>

                    {/* Learning Resources */}
                    {/*<div>*/}
                    {/*    <h2 className="text-3xl font-serif font-bold mb-6">Learn More</h2>*/}
                    {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">*/}
                    {/*        <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">*/}
                    {/*            <CardContent className="p-6 text-center">*/}
                    {/*                <Play className="w-10 h-10 mx-auto text-secondary mb-4"/>*/}
                    {/*                <h3 className="font-bold mb-2">Tribal Dances</h3>*/}
                    {/*                <p className="text-sm text-muted-foreground">Learn through Harul dance songs.</p>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*        <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">*/}
                    {/*            <CardContent className="p-6 text-center">*/}
                    {/*                <BookOpen className="w-10 h-10 mx-auto text-secondary mb-4"/>*/}
                    {/*                <h3 className="font-bold mb-2">History</h3>*/}
                    {/*                <p className="text-sm text-muted-foreground">Read about Jaunsar-Bawar.</p>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*        <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">*/}
                    {/*            <CardContent className="p-6 text-center">*/}
                    {/*                <MessageCircle className="w-10 h-10 mx-auto text-secondary mb-4"/>*/}
                    {/*                <h3 className="font-bold mb-2">Community Chat</h3>*/}
                    {/*                <p className="text-sm text-muted-foreground">Connect with locals.</p>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </Section>
        </div>
    );
}
