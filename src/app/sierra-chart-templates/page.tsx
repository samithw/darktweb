import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function SierraChartPage() {
  const pageImage = PlaceHolderImages.find((img) => img.id === 'sierra-chart-template');

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
          Sierra Chart Templates
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Optimize your trading workflow with our professionally designed Sierra Chart templates.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-lg text-muted-foreground space-y-6">
          <p>Unlock advanced market analysis with our custom Sierra Chart templates. Designed by professional traders, these templates are built to give you a clear, actionable view of order flow, volume profiles, and market dynamics.</p>
          <ul className="space-y-3 list-disc list-inside">
            <li>Visualize key liquidity zones and auction areas.</li>
            <li>Track real-time delta and absorption signals.</li>
            <li>Integrate VWAP and standard deviation bands seamlessly.</li>
            <li>Ready to use out-of-the-box for immediate impact.</li>
          </ul>
          <p>Stop guessing and start seeing the market with clarity. Our templates are the perfect tool for traders who are serious about mastering order flow.</p>
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
