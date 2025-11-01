'use client';

import { contactDetails, socialLinks } from "@/lib/data.tsx";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-card text-card-foreground">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
                        Get In Touch
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
                        Have questions about our mentorships or templates? We're here to help.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-foreground text-left">Contact Information</h2>
                        <p className="text-muted-foreground text-left">
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
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-foreground text-left">Follow Us</h2>
                        <p className="text-muted-foreground text-left">
                            Stay connected for daily market insights, trading tips, and community updates. Follow our channels to join the conversation and sharpen your edge.
                        </p>
                        <div className="space-y-6">
                            {socialLinks.map((social, index) => (
                                <div key={index} className="flex items-center gap-4">
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
        </section>
    );
}
