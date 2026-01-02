import Section from "@/components/Section";
import {Card, CardContent} from "@/components/ui/card";
import {BookOpen, MessageCircle, Play} from "lucide-react";

// https://grokipedia.com/page/Garhwali_language

export default function Page() {
    return (
        <div className="min-h-screen bg-background">

            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="font-hand text-3xl text-secondary mb-2 block">Garhwali Boli</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">
                        The Voice of the Warriors
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Spoken in the Garhwal Himalayas, this language carries the history of kings, warriors, and the
                        divine Kedarnath.
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
                                {phrase: "Kya haal chaan?", meaning: "How are you?", usage: "Casual greeting"},
                                {phrase: "Theek chaun.", meaning: "I am fine.", usage: "Response"},
                                {phrase: "Kakh jani chha?", meaning: "Where are you going?", usage: "Conversation"},
                                {phrase: "Danda", meaning: "Mountain/Hill", usage: "Geography"},
                                {phrase: "Bubu", meaning: "Grandfather", usage: "Family"},
                                {phrase: "Noni", meaning: "Little Girl", usage: "Affectionate"},
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

                    {/* Proverbs */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Wise Words (Proverbs)</h2>
                        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="text-4xl text-blue-300">"</div>
                                    <div>
                                        <p className="text-xl font-medium font-serif text-blue-900 italic">"Ghar ka jogi
                                            jogda, aan gaon ka siddh"</p>
                                        <p className="text-blue-700 mt-1">Meaning: A scholar in his own home is often
                                            undervalued, while outsiders are revered. (Familiarity breeds contempt).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="text-4xl text-blue-300">"</div>
                                    <div>
                                        <p className="text-xl font-medium font-serif text-blue-900 italic">"Jakh devi,
                                            wakh devta"</p>
                                        <p className="text-blue-700 mt-1">Meaning: Where there is a Goddess, there is a
                                            God. (Balance in nature).</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Learning Resources */}
                    {/*<div>*/}
                    {/*    <h2 className="text-3xl font-serif font-bold mb-6">Learn More</h2>*/}
                    {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">*/}
                    {/*        <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">*/}
                    {/*            <CardContent className="p-6 text-center">*/}
                    {/*                <Play className="w-10 h-10 mx-auto text-secondary mb-4"/>*/}
                    {/*                <h3 className="font-bold mb-2">Folk Songs</h3>*/}
                    {/*                <p className="text-sm text-muted-foreground">Learn through music.</p>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*        <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">*/}
                    {/*            <CardContent className="p-6 text-center">*/}
                    {/*                <BookOpen className="w-10 h-10 mx-auto text-secondary mb-4"/>*/}
                    {/*                <h3 className="font-bold mb-2">Literature</h3>*/}
                    {/*                <p className="text-sm text-muted-foreground">Read poems by Narendra Singh Negi.</p>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*        <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">*/}
                    {/*            <CardContent className="p-6 text-center">*/}
                    {/*                <MessageCircle className="w-10 h-10 mx-auto text-secondary mb-4"/>*/}
                    {/*                <h3 className="font-bold mb-2">Community Chat</h3>*/}
                    {/*                <p className="text-sm text-muted-foreground">Practice with native speakers.</p>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </Section>

        </div>
    );
}
