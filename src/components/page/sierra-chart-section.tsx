
'use client';

import * as React from 'react';
import Image from 'next/image';
import { sierraChartTemplates } from '@/lib/data.tsx';
import TemplateCard from './template-card';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const YOUTUBE_VIDEO_ID = 'sierra-chart-video-player';

const videoData = {
    src: 'https://www.youtube.com/embed/iw4myDkpD00?enablejsapi=1',
    alt: 'Basic Sierra Chart Guide – Step-by-Step for Beginners Video',
    type: 'video',
    width: 800,
    height: 450,
    hint: 'sierra chart guide'
};

const videoPoints = [
    "How to download and install Sierra Chart on your PC",
    "How to create and activate a Sierra Chart account",
    "How to open the platform correctly for the first time",
    "How to add symbols to your chart (Forex , Crypto)",
    "How to change timeframes and chart types",
    "How to add and use Volume Profile",
    "How to load and apply templates",
    "How to save your chart layout",
    "How to reconnect Sierra Chart when the connection expires",
    "Common beginner mistakes and how to avoid them",
    "Basic tips to keep Sierra Chart running smoothly"
];


export default function SierraChartSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );
    const [api, setApi] = React.useState<CarouselApi>();
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const playerRef = React.useRef<any>(null);

    const pauseVideo = React.useCallback(() => {
        if (playerRef.current && playerRef.current.pauseVideo && typeof playerRef.current.getPlayerState === 'function') {
            // 1 is YT.PlayerState.PLAYING
            if (playerRef.current.getPlayerState() === 1) {
                playerRef.current.pauseVideo();
            }
        }
    }, []);

    React.useEffect(() => {
        const onYouTubeIframeAPIReady = () => {
            if (document.getElementById(YOUTUBE_VIDEO_ID)) {
                playerRef.current = new (window as any).YT.Player(YOUTUBE_VIDEO_ID, {});
            }
        };

        if (!(window as any).YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
            const firstScriptTag = document.getElementsByTagName('script')[0];
            if (firstScriptTag && firstScriptTag.parentNode) {
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
        } else {
            onYouTubeIframeAPIReady();
        }
    }, []);


    React.useEffect(() => {
        if (!api) {
            return;
        }

        const onSelect = (api: CarouselApi) => {
            if (!api || api.selectedScrollSnap() !== 0) {
                pauseVideo();
            }
        };

        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        };
    }, [api, pauseVideo]);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    pauseVideo();
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = carouselRef.current;
        const videoIframe = currentRef?.querySelector(`#${YOUTUBE_VIDEO_ID}`);
        if (videoIframe) {
            observer.observe(videoIframe);
        }

        return () => {
            if (videoIframe) {
                observer.unobserve(videoIframe);
            }
        };
    }, [pauseVideo]);


    return (
        <section id="sierra-chart-templates" className="bg-card text-card-foreground">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
                        Sierra Chart Templates
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
                        Optimize your trading workflow with our professionally designed Sierra Chart templates.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {sierraChartTemplates.map((template) => (
                        <TemplateCard
                            key={template.fileName}
                            imageUrl={template.imageUrl}
                            name={template.name}
                            price={template.price}
                            isFree={template.isFree}
                            imageHint={template.imageHint}
                            imageWidth={400}
                            imageHeight={300}
                            downloadUrl={template.downloadUrl}
                        />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
                        Sierra Chart Will Change How You See the Market
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
                        Sierra Chart takes you beyond basic indicators and shows the real story behind price, using professional-grade tools like order flow, footprint charts, volume profiles, delta, and market depth.
                    </p>
                </div>

                <div className="mt-16 p-8 rounded-xl shadow-2xl border border-primary/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                Basic Sierra Chart Guide – Step-by-Step for Beginners
                            </h2>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-4">🔥 What You Will Learn in This Video</h3>
                                <ul className="space-y-3">
                                    {videoPoints.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div ref={carouselRef}>
                            <Carousel
                                setApi={setApi}
                                plugins={[plugin.current]}
                                className="w-full"
                                onMouseEnter={plugin.current.stop}
                                onMouseLeave={plugin.current.reset}
                            >
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="overflow-hidden rounded-lg">
                                            <div className="aspect-video bg-black">
                                                <iframe
                                                    id={YOUTUBE_VIDEO_ID}
                                                    className="w-full h-full"
                                                    src={videoData.src}
                                                    title={videoData.alt}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
