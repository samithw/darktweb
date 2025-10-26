import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Mt5TemplatesPage() {
  const pageImage = PlaceHolderImages.find((img) => img.id === 'mt5-template');

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
          MT5 Templates
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Enhance your MetaTrader 5 experience with templates designed for serious traders.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-lg text-muted-foreground space-y-6">
          <p>Bring powerful order flow concepts to the popular MT5 platform. While MT5 is not a native order flow platform, our templates and indicators help bridge the gap by providing enhanced volume and price action analysis.</p>
          <ul className="space-y-3 list-disc list-inside">
            <li>Advanced volume indicators to supplement your analysis.</li>
            <li>Clean, professional chart layouts for multi-timeframe analysis.</li>
            <li>Tools to help identify key supply and demand zones.</li>
            <li>Easy installation and customization to fit your style.</li>
          </ul>
          <p>Get the most out of MT5 by incorporating key institutional concepts into your trading strategy.</p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Get Templates</Link>
          </Button>
        </div>
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
      </div>
    </div>
  );
}
