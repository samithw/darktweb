'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactDetails } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        form.reset();
    }

    return (
        <section id="contact" className="bg-card text-card-foreground">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
                        Get In Touch
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
                        Have questions about our mentorships or templates? We're here to help.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <Card className="bg-background">
                        <CardHeader>
                            <CardTitle>Send us a Message</CardTitle>
                            <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="you@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="How can we help you?" {...field} className="min-h-[120px]" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full" size="lg">Send Message</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
                        <p className="text-muted-foreground">
                            Reach out to us directly through any of the channels below. We are available during standard business hours to assist you with your inquiries.
                        </p>
                        <div className="space-y-4">
                            {contactDetails.map((detail, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-md h-10 w-10 flex items-center justify-center">
                                        <detail.icon className="h-5 w-5" />
                                    </div>
                                    {detail.href ? (
                                        <a href={detail.href} className="text-lg text-muted-foreground hover:text-primary transition-colors">{detail.text}</a>
                                    ) : (
                                        <p className="text-lg text-muted-foreground">{detail.text}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
