import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Target, Eye } from 'lucide-react';

const values = [
    {
        icon: Award,
        title: "Excellence",
        description: "We are committed to providing the highest quality education and tools to help traders succeed in complex market environments."
    },
    {
        icon: Target,
        title: "Discipline",
        description: "Our methodology is rooted in a disciplined, process-driven approach to trading, removing emotion and focusing on data."
    },
    {
        icon: Eye,
        title: "Clarity",
        description: "We demystify the market's mechanics, offering clear, actionable insights into order flow and auction market theory."
    }
]

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
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
              width={800}
              height={600}
              className="rounded-lg shadow-2xl object-cover aspect-[4/3]"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
        <div className="text-lg text-muted-foreground space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
          <p>At Dark Trader, our mission is to empower retail traders with the institutional-grade knowledge and tools needed to navigate the financial markets successfully. We believe that understanding the real mechanics of the market—the 'why' behind price movement—is the key to consistent profitability.</p>
          <p>We move beyond simplistic technical indicators and price patterns to teach the foundational principles of auction market theory and order flow. Our goal is to transform aspiring traders into market professionals who can read, interpret, and act on market-generated information with confidence.</p>
        </div>
      </div>

        <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-foreground">Our Core Values</h2>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value) => (
                    <div key={value.title} className="text-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mx-auto">
                            <value.icon className="h-6 w-6"/>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-foreground">{value.title}</h3>
                        <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
