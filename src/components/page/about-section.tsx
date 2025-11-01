
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { aboutValues } from '@/lib/data';

export default function AboutSection() {
    const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');

    return (
        <section id="about" className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
                    About Dark Trader
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
                    Mastering the markets with precision and discipline.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    {aboutImage && (
                        <Image
                            src={aboutImage.imageUrl}
                            alt={aboutImage.description}
                            width={600}
                            height={800}
                            className="rounded-lg shadow-2xl object-cover aspect-square mx-auto lg:mx-0"
                            data-ai-hint={aboutImage.imageHint}
                        />
                    )}
                </div>
                <div className="text-lg text-muted-foreground space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                    <p>At Dark Trader, our mission is to empower retail traders with the institutional-grade knowledge and tools needed to navigate the financial markets successfully. We believe that understanding the real mechanics of the market—the “why” behind price movement—is the key to consistent profitability.</p>
                    <p>We specialize in Order Flow and Auction Market Theory, teaching traders to read and interpret real market activity. Our goal is to help you understand how the market truly works and trade with the mindset of a professional.</p>
                </div>
            </div>
            <div className="mt-24">
                <h2 className="text-3xl font-bold text-center text-foreground">Our Core Values</h2>
                <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {aboutValues.map((value) => (
                        <div key={value.title} className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mx-auto">
                                <value.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-foreground">{value.title}</h3>
                            <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
