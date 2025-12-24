import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Radio } from 'lucide-react';

export default function HeroSection() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'home-hero');

    return (
        <section id="home" className="relative h-[calc(100vh-5rem)] w-full">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
            )}
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Darktrader presents
                </span>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl font-headline">
                    Reading the market, not predicting it
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl">
                    Welcome to Real Orderflow Mastery
                </p>

                <div className="mt-8 rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 via-black/10 to-transparent p-1 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-4 rounded-full bg-black/20 px-6 py-3">
                        <div className="relative flex h-5 w-5 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <Radio className="relative inline-flex h-3 w-3 text-primary-foreground" />
                        </div>
                        <p className="font-semibold tracking-wide text-white">
                            New Live Mentorship Batch Starting August 25th!
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#mentorships">View Mentorships</Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                        <Link href="#about">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
