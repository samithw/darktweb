
'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const indicatorImages = [
  {
    src: 'https://www.youtube.com/embed/5hMeRMvLgbE',
    alt: 'Real CDV Indicator Intro Video',
    type: 'video',
    width: 800,
    height: 450,
    hint: 'trading indicator video'
  },
  {
    src: './images/trading-view/cdv-preview1_800x433.jpg',
    alt: 'Real CDV Indicator Preview 1',
    type: 'image',
    width: 800,
    height: 433,
    hint: 'trading indicator chart'
  },
  {
    src: './images/trading-view/cdv-preview2_800x431.jpg',
    alt: 'Real CDV Indicator Preview 2',
    type: 'image',
    width: 800,
    height: 431,
    hint: 'volume analysis graph'
  },
  {
    src: './images/trading-view/cdv-preview3_800x432.jpg',
    alt: 'Real CDV Indicator Preview 3',
    type: 'image',
    width: 800,
    height: 432,
    hint: 'market data visualization'
  },
];

export default function TradingViewSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = (api: CarouselApi) => {
      if (!api) {
        return;
      }
      setCurrent(api.selectedScrollSnap());
    };

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section id="trading-view" className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
        TradingView Indicators & Packages
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Unlock market secrets with our exclusive TradingView indicators & packages.
        </p>
      </div>

      <div className="mt-16 bg-card p-8 rounded-xl shadow-2xl border border-primary/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Real Cumulative Delta Volume (CDV) Indicator
              </h2>
              <p className="text-sm text-muted-foreground">Version 1.0 | Developer: Darktrader</p>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                  <h3 className="text-xl font-semibold text-primary">🔥 Why Every Serious Trader Needs the Real CDV</h3>
                  <p>
                  <span className="font-semibold text-foreground">See What Most Traders Miss</span><br />
                  Most traders rely on volume indicators that only show how much volume traded — but not who controlled the move. Was it aggressive buyers or dominant sellers? That’s the question ordinary tools can’t answer.
                  </p>
                  <p>
                  The Real CDV Indicator uncovers that hidden layer of market truth by revealing the real-time strength and intent of market participants.
                  </p>
              </div>
               <div className="space-y-4 pt-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-foreground">3999 LKR</span>
                    <span className="text-xl font-medium text-muted-foreground line-through">4999 LKR</span>
                  </div>
                  <p className="text-sm text-green-400 font-semibold">Special Offer!</p>
              </div>
               <Button asChild size="lg" className="mt-6">
                  <Link href="#contact">Get The Indicator</Link>
               </Button>
          </div>

          <div>
              <div className="relative">
                  <Carousel
                      setApi={setApi}
                      plugins={[plugin.current]}
                      className="w-full"
                      onMouseEnter={plugin.current.stop}
                      onMouseLeave={plugin.current.reset}
                  >
                      <CarouselContent>
                      {indicatorImages.map((item, index) => (
                          <CarouselItem key={index}>
                            <div className="overflow-hidden rounded-lg">
                              <div className="aspect-w-16 aspect-h-9 bg-black">
                                {item.type === 'video' ? (
                                    <iframe
                                      className="w-full h-full"
                                      src={item.src}
                                      title={item.alt}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                    ></iframe>
                                  ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={item.width}
                                        height={item.height}
                                        className="w-full h-full object-cover"
                                        data-ai-hint={item.hint}
                                    />
                                  )}
                              </div>
                            </div>
                          </CarouselItem>
                      ))}
                      </CarouselContent>
                  </Carousel>
                  <div className="relative p-4 rounded-b-lg -mt-1 bg-gradient-to-t from-black to-black/80">
                      <p className="text-left text-primary font-semibold text-lg py-1 px-5">
                          A next-level volume indicator using true bid/ask data to reveal real market pressure.
                      </p>
                  </div>
              </div>
             
              <div className="flex justify-center gap-2 mt-4">
                  {Array.from({ length: count }).map((_, index) => (
                      <button
                          key={index}
                          onClick={() => scrollTo(index)}
                          className={cn(
                              "h-2.5 w-8 rounded-full transition-colors",
                              current === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                          )}
                      >
                        <span className="sr-only">Go to slide {index + 1}</span>
                      </button>
                  ))}
              </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 bg-card p-8 rounded-xl shadow-2xl border border-primary/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 md:order-last lg:order-first">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                📊 Upgrade Your Trading Experience with TradingView Premium
              </h2>
              <div className="lg:hidden">
                <div className="aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-lg shadow-lg">
                      <Image
                          src="/images/trading-view/tradingview-desktop-reaches-stable-preview.jpg"
                          alt="TradingView Premium Banner"
                          fill
                          className="object-cover"
                          data-ai-hint="trading analysis"
                      />
                  </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Stop limiting your analysis with the free plan! With TradingView Premium, you get faster data, more charts, and powerful features that professional traders rely on every day.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">🔥 Premium Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> <span className="text-muted-foreground">8 charts in one layout</span></li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> <span className="text-muted-foreground">Real-time data with zero ads</span></li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> <span className="text-muted-foreground">Save unlimited layouts & indicators</span></li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> <span className="text-muted-foreground">Set multiple alerts and manage trades faster</span></li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> <span className="text-muted-foreground">Priority support and smoother performance</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">💎 Perfect for:</h3>
                 <ul className="space-y-3">
                    <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> <span className="text-muted-foreground">Forex and Orderflow traders</span></li>
                    <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> <span className="text-muted-foreground">Volume and CVD analysis</span></li>
                    <li className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> <span className="text-muted-foreground">Institutional-style charting setups</span></li>
                </ul>
              </div>
              <div className="space-y-4 pt-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-foreground">4500 LKR</span>
                    <span className="text-xl font-medium text-muted-foreground line-through">4950 LKR</span>
                  </div>
                  <p className="text-sm text-green-400 font-semibold">Special Offer!</p>
              </div>
              <div className="flex items-center gap-4">
                <Button asChild size="lg" className="mt-4">
                  <Link href="#contact">Order now</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
                <Image
                    src="/images/trading-view/tradingview-desktop-reaches-stable-preview.jpg"
                    alt="TradingView Premium Banner"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    data-ai-hint="trading analysis"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
