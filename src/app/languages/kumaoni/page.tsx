import Section from "@/components/Section";
import {Card, CardContent} from "@/components/ui/card";
import {BookOpen, MessageCircle, Play} from "lucide-react";
// https://grokipedia.com/page/Kumaoni_language

export default function Page() {
    return (
        <div className="min-h-screen bg-background">

            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-emerald-50 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="font-hand text-3xl text-secondary mb-2 block">Kumaoni Boli</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">
                        The Sweetness of Kumaon
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Spoken by over 2 million people in the Kumaon division, this language is known for its lyrical
                        quality and rich oral tradition.
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
                                {phrase: "Kas chho?", meaning: "How are you?", usage: "Casual greeting"},
                                {phrase: "Bhal chhu.", meaning: "I am fine.", usage: "Response"},
                                {phrase: "Khai liyo?", meaning: "Have you eaten?", usage: "Showing care"},
                                {phrase: "Pahad", meaning: "Mountain", usage: "Everyday word"},
                                {phrase: "Ija", meaning: "Mother", usage: "Family"},
                                {phrase: "Bau", meaning: "Father", usage: "Family"},
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
                        <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="text-4xl text-emerald-300">"</div>
                                    <div>
                                        <p className="text-xl font-medium font-serif text-emerald-900 italic">"Jaag bhal
                                            ta bhaag bhal"</p>
                                        <p className="text-emerald-700 mt-1">Meaning: If the beginning is good, the fate
                                            (outcome) will be good.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="text-4xl text-emerald-300">"</div>
                                    <div>
                                        <p className="text-xl font-medium font-serif text-emerald-900 italic">"Appan
                                            haath, Jagannath"</p>
                                        <p className="text-emerald-700 mt-1">Meaning: Self-reliance is the best worship.
                                            Trust your own hands.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Learning Resources */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Learn More</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                                <CardContent className="p-6 text-center">
                                    <Play className="w-10 h-10 mx-auto text-secondary mb-4"/>
                                    <h3 className="font-bold mb-2">Audio Lessons</h3>
                                    <p className="text-sm text-muted-foreground">Listen to pronunciation guides.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                                <CardContent className="p-6 text-center">
                                    <BookOpen className="w-10 h-10 mx-auto text-secondary mb-4"/>
                                    <h3 className="font-bold mb-2">Dictionary</h3>
                                    <p className="text-sm text-muted-foreground">Search for 5000+ words.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                                <CardContent className="p-6 text-center">
                                    <MessageCircle className="w-10 h-10 mx-auto text-secondary mb-4"/>
                                    <h3 className="font-bold mb-2">Community Chat</h3>
                                    <p className="text-sm text-muted-foreground">Practice with native speakers.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </Section>

        </div>
    );
}
