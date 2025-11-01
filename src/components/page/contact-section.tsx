'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { contactDetails, socialLinks } from "@/lib/data.tsx";
import Link from 'next/link';

export default function ContactSection() {
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
                <div className="mt-16 max-w-lg mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-foreground text-center">Contact Information</h2>
                        <p className="text-muted-foreground text-center">
                            Reach out to us directly through any of the channels below. We are available during standard business hours to assist you with your inquiries.
                        </p>
                        <div className="space-y-6">
                            {contactDetails.map((detail, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 bg-primary/10 text-primary rounded-md h-12 w-12 flex items-center justify-center">
                                        <detail.icon className="h-6 w-6" />
                                    </div>
                                    {detail.href ? (
                                        <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary transition-colors">{detail.text}</a>
                                    ) : (
                                        <p className="text-lg text-muted-foreground">{detail.text}</p>
                                    )}
                                </div>
                            ))}
                            <div className="border-t border-border/40 pt-6">
                                {socialLinks.map((social, index) => (
                                    <div key={index} className="flex items-center gap-4 mb-4">
                                        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-md h-12 w-12 flex items-center justify-center">
                                            <social.icon className="h-6 w-6" />
                                        </div>
                                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary transition-colors">{social.handle}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
