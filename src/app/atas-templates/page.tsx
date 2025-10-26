import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function AtasTemplatesPage() {
  const pageImage = PlaceHolderImages.find((img) => img.id === 'atas-template');

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
          ATAS Templates
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Gain a competitive edge with our powerful ATAS templates, built for precision and clarity.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {pageImage && (
            <Image
              src={pageImage.imageUrl}
              alt={pageImage.description}
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              data-ai-hint={pageImage.imageHint}
            />
          )}
        </div>
        <div className="text-lg text-muted-foreground space-y-6">
          <p>Elevate your analysis on the ATAS platform. Our templates are engineered to provide deep market insights, focusing on order flow and volume analysis to help you make more informed trading decisions.</p>
          <ul className="space-y-3 list-disc list-inside">
            <li>Pre-configured smart tape and DOM for efficient reading.</li>
            <li>Customizable footprint charts to spot absorption and exhaustion.</li>
            <li>Detailed volume cluster analysis for identifying key levels.</li>
            <li>User-friendly layouts that reduce noise and improve focus.</li>
          </ul>
          <p>Transform your ATAS workspace into a professional-grade analysis station and stay ahead of the market.</p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Get Templates</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
