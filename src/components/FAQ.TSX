import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "./ui/accordion";
import {motion} from "framer-motion";

export default function FAQ() {
    const faqs = [
        {
            question: "What is the best time to visit Uttarakhand?",
            answer: "Uttarakhand is a year-round destination. Summer (March to June) is perfect for escaping the heat and trekking. Winter (October to February) is ideal for snow lovers and skiing in Auli. The monsoon (July to September) sees the Valley of Flowers in full bloom, though travel can be tricky due to rain."
        },
        {
            question: "How can I contribute a story to Uttarakhand Culture?",
            answer: "We love community contributions! You can go to the 'Community' section in the footer or click on 'Share a Story' on the homepage. We accept written stories, photo essays, and audio recordings of folk songs."
        },
        {
            question: "Are the spiritual sites accessible to everyone?",
            answer: "Most major spiritual sites like Haridwar and Rishikesh are easily accessible. High-altitude temples like Kedarnath and Tungnath require trekking, though pony and helicopter services are available for some locations. Always check weather conditions before planning a pilgrimage."
        },
        {
            question: "What are the main languages spoken?",
            answer: "The primary regional languages are Kumaoni (in the east) and Garhwali (in the west). Hindi is widely spoken and understood throughout the state. English is commonly spoken in tourist hubs."
        },
        {
            question: "Is it safe for solo travelers?",
            answer: "Yes, Uttarakhand is considered one of the safest states in India for solo travelers. The locals are known for their warmth and hospitality. However, standard travel precautions should always be taken."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: index * 0.1}}
                        viewport={{once: true}}
                    >
                        <AccordionItem value={`item-${index}`}
                                       className="border border-border/50 rounded-lg bg-white/50 backdrop-blur-sm px-4 shadow-sm hover:shadow-md transition-all duration-300">
                            <AccordionTrigger className="text-lg font-serif font-medium hover:text-secondary text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </div>
    );
}
