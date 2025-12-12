import Section from "@/components/Section";
import {Mail, MessageSquare} from "lucide-react";
// import { useForm } from "react-hook-form";
// import { useToast } from "@/hooks/use-toast";

export default function Contact() {
    // const { register, handleSubmit, reset } = useForm();
    // const { toast } = useToast();
    //
    // const onSubmit = (data: any) => {
    //   console.log(data);
    //   toast({
    //     title: "Message Sent!",
    //     description: "Thank you for reaching out. We will get back to you soon.",
    //   });
    //   reset();
    // };

    return (
        <div className="min-h-screen bg-background">


            <section className="pt-32 pb-12 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-muted-foreground">
                        Whether you have a story to share, a question to ask, or just want to say Namaste.
                    </p>
                </div>
            </section>

            <Section className="bg-muted/20">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border">
                    {/*<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">*/}

                    {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
                    {/*    <div className="space-y-2">*/}
                    {/*      <label htmlFor="name">Name</label>*/}
                    {/*        */}
                    {/*      <Input id="name" placeholder="Your Name" {...register("name", { required: true })} />*/}
                    {/*    </div>*/}
                    {/*    <div className="space-y-2">*/}
                    {/*      <label htmlFor="email">Email</label>*/}
                    {/*      <Input id="email" type="email" placeholder="your@email.com" {...register("email", { required: true })} />*/}
                    {/*    </div>*/}
                    {/*  </div>*/}

                    {/*  <div className="space-y-2">*/}
                    {/*    <label htmlFor="reason">Reason to Connect</label>*/}
                    {/*    <select*/}
                    {/*      id="reason"*/}
                    {/*      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"*/}
                    {/*      {...register("reason")}*/}
                    {/*    >*/}
                    {/*      <option value="story">Submit a Story</option>*/}
                    {/*      <option value="feedback">Feedback</option>*/}
                    {/*      <option value="collaboration">Collaboration</option>*/}
                    {/*      <option value="other">Other</option>*/}
                    {/*    </select>*/}
                    {/*  </div>*/}

                    {/*  <div className="space-y-2">*/}
                    {/*    <label htmlFor="message">Message</label>*/}
                    {/*    <textarea*/}
                    {/*      id="message"*/}
                    {/*      placeholder="Tell us your story..."*/}
                    {/*      className="min-h-[150px]"*/}
                    {/*      {...register("message", { required: true })}*/}
                    {/*    />*/}
                    {/*  </div>*/}

                    {/*  <Button type="submit" size="lg" className="w-full md:w-auto">*/}
                    {/*    <Send className="w-4 h-4 mr-2" /> Send Message*/}
                    {/*  </Button>*/}
                    {/*</form>*/}
                </div>
            </Section>

            <Section centered>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-center md:text-left">
                    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Mail className="w-6 h-6 text-primary"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Email Us</h3>
                            <p className="text-muted-foreground">hello@uttarakhandculture.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm">
                        <div className="p-3 bg-secondary/10 rounded-full">
                            <MessageSquare className="w-6 h-6 text-secondary"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Socials</h3>
                            <p className="text-muted-foreground">@uttarakhandculture</p>
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    );
}
