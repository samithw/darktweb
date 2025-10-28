
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Award, Target, Eye, CheckCircle, Gem, Users, Library, Mail, Phone, MapPin, Send, Video, Wallet, Gift } from 'lucide-react';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Logo from '../../../public/images/dt-logo.jpg';

// Data for sections
const aboutValues = [
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
];

const mentorships = [
  {
    icon: Users,
    title: 'Live Mentorship Program',
    description:
      'For serious traders who want to master the real mechanics of the market in a group setting.',
    price: '18,000 LKR',
    features: [
      'Auction Market Theory & Market Structure',
      'Key Levels & Liquidity Zones',
      'Volume Spread Analysis (VSA)',
      'VWAP & Fair Value Concepts',
      'Fixed Range Volume Profile',
      'Initial Balance & Value Area',
      'Volume Nodes & Standard Deviations',
      'Developing a Market Narrative',
      'DOMDelta, Absorption & Exhaustion Signals',
      'Market Profile & Footprint Reading',
      'Real-Time Market Prediction Techniques',
      'Deep dive into Sierra Charts',
    ],
    highlight: false,
  },
  {
    icon: Gem,
    title: 'Individual Orderflow Mentorship',
    description:
      'One-on-one program for traders who want straight focus and faster results.',
    price: '40,000 LKR',
    features: [
      '100% personal attention',
      'Customized learning pace',
      'Learn only what matters — no wasted time',
      'Direct feedback and real market practice',
      'Flexible class times that fit your schedule',
      'Build deep understanding of Orderflow',
      'Perfect for traders who want to level up fast',
    ],
    highlight: true,
  },
  {
    icon: Library,
    title: 'Self-Study Orderflow Mentorship',
    description: 'Learn at your own pace with lifetime access to our content.',
    price: 'One-Time Payment',
    features: [
      'Full access to private Google Drive content',
      'Over 100 short, structured video lessons',
      'Step-by-step explanations',
      'Watch anytime, from any device',
      'Ongoing support for your questions',
      'Perfect for independent learners',
    ],
    highlight: false,
  },
];

const contactDetails = [
    { icon: Mail, text: "support@darktrader.com", href: "mailto:support@darktrader.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "123 Trading Floor, Market St, New York" },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const sierraChartTemplates = [
  { fileName: "101-chart-cdv-999.jpg", description: "Chart - CDV Template, Price LKR 999" },
  { fileName: "102-red-delta-dom-free.jpg", description: "Red Delta DOM Template, Price LKR free" },
  { fileName: "103-xauusd-main-999.jpg", description: "xauusd Main Template, Price LKR 999" },
  { fileName: "104-main-delta-bars-1499.jpg", description: "Main-Delta Bars Template, Price LKR 1,499" },
  { fileName: "105-real-cdv-1499.jpg", description: "Real cdv Template, Price LKR 1,499" },
  { fileName: "106-delta-by-vol-1499.jpg", description: "Delta by Vol Template, Price LKR 1,499" },
  { fileName: "107-sin-delta-vol-1500.jpg", description: "Sin Delta - Vol Template, Price LKR 1,500" },
  { fileName: "108-tpo-999.jpg", description: "TPO Template, Price LKR 999" },
  { fileName: "109-heatmap-999.jpg", description: "HeatMap Template, Price LKR 999" },
  { fileName: "110-main-02-dom-1499.jpg", description: "Main 02 - DOM Template, Price LKR 1,499" },
  { fileName: "111-xauusd-fp-999.jpg", description: "XAUUSD FP Template, Price LKR 999" },
  { fileName: "112-xauusd-fp-advance-1499.jpg", description: "XAUUSD FP Advance Template, Price LKR 1,499" },
  { fileName: "113-tpo-2-advance-999.jpg", description: "TPO 2 Advance Template, Price LKR 999" },
  { fileName: "114-mod-dom-999.jpg", description: "Mod DOM Template, Price LKR 999" },
  { fileName: "115-btc-dom-bubble-999.jpg", description: "BTC DOM-Bubble Template, Price LKR 999" },
  { fileName: "116-carmine-dom-999.jpg", description: "Carmine DOM Template, Price LKR 999" },
  { fileName: "117-footprint-2-in-1-1499.jpg", description: "Footprint 2 in 1 Template, Price LKR 1,499" },
  { fileName: "118-hacker-footprint-1499.jpg", description: "Hacker Footprint Template, Price LKR 1,499" },
  { fileName: "119-powerfull-tpo-02-1999.jpg", description: "Powerful TPO 02 Template, Price LKR 1,999" },
  { fileName: "120-powerfull-tpo-01-2499.jpg", description: "Powerful TPO 01 Template, Price LKR 2,499" },
  { fileName: "121-low-vol-node-1499.jpg", description: "Low Vol Node Template, Price LKR 1,499" },
  { fileName: "122-blue-red-footprint-1499.jpg", description: "Blue Red Footprint Template, Price LKR 1,499" }
].map(template => {
  const parts = template.description.split(', Price ');
  const name = parts[0];
  const price = parts[1];
  const isFree = price.toLowerCase().includes('free');
  return {
    ...template,
    name,
    price: isFree ? 'Download for free' : price,
    isFree,
    imageUrl: `/images/sierra-charts/${template.fileName}`,
    imageHint: 'chart template'
  };
}).sort((a, b) => {
  const numA = parseInt(a.fileName.substring(0, 3), 10);
  const numB = parseInt(b.fileName.substring(0, 3), 10);
  return numA - numB;
});

const mt5Templates = [
    { fileName: "101-appcapfx-trade-manager-free_800x406.jpg", description: "AppcapFX-Trade-Manager Template, Price LKR free" },
    { fileName: "102-better-volume-1-5-free_800x406.jpg", description: "Better Volume 1.5 Template, Price LKR free" },
    { fileName: "103-gold-heatmap-red-4999_800x406.jpg", description: "Gold HeatMap - red Template, Price LKR 4,999" },
    { fileName: "104-gold-heatmap-blue-4999_800x406.jpg", description: "Gold HeatMap - Blue Template, Price LKR 4,999" },
    { fileName: "105-cdv-heik-v2-999_800x406.jpg", description: "CDV - Heik - v2 Template, Price LKR 999" },
    { fileName: "106-fundednext-sessionbar-free_800x406.jpg", description: "FundedNext SessionBar Template, Price LKR free" },
    { fileName: "107-fundednext-trade-manager-free_800x406.jpg", description: "FundedNext Trade Manager Template, Price LKR free" },
    { fileName: "108-volume-profile-free_800x406.jpg", description: "Volume profile Template, Price LKR Free" },
    { fileName: "109-maxmin-delta-free_800x406.jpg", description: "MaxMin DELTA Template, Price LKR Free" },
    { fileName: "110-strategy-checklist-free_800x406.jpg", description: "Strategy Checklist Template, Price LKR Free" },
    { fileName: "111-vwap-free_800x406.jpg", description: "VWAP Template, Price LKR Free" },
    { fileName: "112-average-volume-pro-free_800x406.jpg", description: "Average volume Pro Template, Price LKR free" },
    { fileName: "113-volume-profile-pro-999_800x406.jpg", description: "Volume profile Pro Template, Price LKR 999" },
    { fileName: "114-vwap-d-wm-free_800x406.jpg", description: "Vwap DWM Template, Price LKR Free" },
    { fileName: "115-darktrader-vwap-999_800x401.jpg", description: "Darktrader Vwap Template, Price LKR 999" },
].map(template => {
    const parts = template.description.split(', Price ');
    const name = parts[0];
    const price = parts[1];
    const isFree = price.toLowerCase().includes('free');
    return {
        ...template,
        name,
        price: isFree ? 'Download for free' : price,
        isFree,
        imageUrl: `/images/mt5-templates/${template.fileName}`,
        imageHint: 'mt5 template'
    };
}).sort((a, b) => {
    const numA = parseInt(a.fileName.substring(0, 3), 10);
    const numB = parseInt(b.fileName.substring(0, 3), 10);
    return numA - numB;
});

const atasTemplates = [
  { fileName: "101-footprint-dp-free_800x428.jpg", description: "Footprint DP Template, Price LKR free" },
  { fileName: "102-footprint-da-free_800x428.jpg", description: "Footprint DA Template, Price LKR free" },
  { fileName: "103-footprint-v-free_800x428.jpg", description: "Footprint + V. Template, Price LKR free" }
].map(template => {
    const parts = template.description.split(', Price ');
    const name = parts[0];
    const price = parts[1];
    const isFree = price.toLowerCase().includes('free');
    return {
        ...template,
        name,
        price: isFree ? 'Download for free' : price,
        isFree,
        imageUrl: `/images/atas-templates/${template.fileName}`,
        imageHint: 'atas template'
    };
}).sort((a, b) => {
    const numA = parseInt(a.fileName.substring(0, 3), 10);
    const numB = parseInt(b.fileName.substring(0, 3), 10);
    return numA - numB;
});


const commonBenefits = [
  {
    icon: Send,
    title: "Classes on Telegram",
    description: "All live and individual mentorship sessions are conducted via Telegram for smooth communication and real-time learning."
  },
  {
    icon: Video,
    title: "Class Recordings",
    description: "Every session is recorded — watch anytime and never miss a lesson."
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    description: "No need to pay all at once! Easy instalment plans are available to make it simple and stress-free."
  },
  {
    icon: Gift,
    title: "After Completing the Orderflow Mentorship",
    description: "Get exclusive access to the best Sri Lankan Orderflow Discord community and receive 14GB of premium English mentorship content from top professional traders on Google Drive.",
    subPoints: [
      "Get exclusive access to the best Sri Lankan Orderflow Discord community — connect, discuss, and grow with active traders.",
      "Receive free 14GB of premium English mentorship content from top professional traders on Google Drive — your next level of learning, absolutely free."
    ]
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'home-hero');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');
  const atasImage = PlaceHolderImages.find((img) => img.id === 'atas-template');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    form.reset();
  }

  return (
    <>
      {/* Hero Section */}
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

      {/* Mentorships Section */}
      <section id="mentorships" className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
            OrderFlow Trading Mentorship
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Join our program and unlock your trading potential for success.
          </p>
        </div>
        <div className="mt-20 grid max-w-md mx-auto gap-12 lg:max-w-none lg:grid-cols-3">
          {mentorships.map((mentorship) => (
            <Card
              key={mentorship.title}
              className={`flex flex-col ${
                mentorship.highlight ? 'border-primary ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              <CardHeader className="flex-grow">
                <div className="flex items-start gap-4">
                  <mentorship.icon className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <CardTitle className="text-2xl">{mentorship.title}</CardTitle>
                    <CardDescription className="mt-1">{mentorship.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {mentorship.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 pt-6">
                  <div className='w-full'>
                      <p className="text-3xl font-bold">{mentorship.price}</p>
                      <p className="text-sm text-muted-foreground">
                          {mentorship.highlight ? "For dedicated individuals" : "Great value"}
                      </p>
                  </div>
                <Button asChild className="w-full" size="lg" variant={mentorship.highlight ? 'default' : 'secondary'}>
                  <Link href="#contact">Enroll Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">What's Included in Every Program</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {commonBenefits.slice(0, 3).map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 text-primary rounded-md h-12 w-12 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
             <div className="md:col-span-2 flex items-start gap-4 p-6 bg-card rounded-lg border">
                <div className="flex-shrink-0 bg-primary/10 text-primary rounded-md h-12 w-12 flex items-center justify-center">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">After Completing the Orderflow Mentorship</h3>
                   <ul className="mt-2 space-y-3">
                    {commonBenefits[3].subPoints?.map((point, index) => (
                       <li key={index} className="flex items-start">
                         <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                         <span className="text-muted-foreground">{point}</span>
                       </li>
                    ))}
                   </ul>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* Sierra Chart Section */}
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
              <Card key={template.fileName} className="overflow-hidden flex flex-col">
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={template.imageUrl}
                      alt={template.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      data-ai-hint={template.imageHint}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <CardDescription className="text-base text-card-foreground">
                      {template.name}
                    </CardDescription>
                    <div className="mt-4">
                       {template.isFree ? (
                          <Link href="#" className={cn(badgeVariants({ variant: 'default' }), 'text-sm')}>
                            {template.price}
                          </Link>
                       ) : (
                         <Badge variant="default" className="text-sm">
                           {template.price}
                         </Badge>
                       )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ATAS Section */}
      <section id="atas-templates" className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
            ATAS Templates
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Gain a competitive edge with our powerful ATAS templates, built for precision and clarity.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {atasTemplates.map((template) => (
              <Card key={template.fileName} className="overflow-hidden flex flex-col">
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={template.imageUrl}
                      alt={template.name}
                      width={800}
                      height={428}
                      className="object-cover w-full h-full"
                      data-ai-hint={template.imageHint}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <CardDescription className="text-base text-card-foreground">
                      {template.name}
                    </CardDescription>
                    <div className="mt-4">
                       {template.isFree ? (
                          <Link href="#" className={cn(badgeVariants({ variant: 'default' }), 'text-sm')}>
                            {template.price}
                          </Link>
                       ) : (
                         <Badge variant="default" className="text-sm">
                           {template.price}
                         </Badge>
                       )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>

      {/* MT5 Section */}
      <section id="mt5-templates" className="bg-card text-card-foreground">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
              MT5 Templates
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Enhance your MetaTrader 5 experience with templates designed for serious traders.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {mt5Templates.map((template) => (
              <Card key={template.fileName} className="overflow-hidden flex flex-col">
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={template.imageUrl}
                      alt={template.name}
                      width={800}
                      height={406}
                      className="object-cover w-full h-full"
                      data-ai-hint={template.imageHint}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <CardDescription className="text-base text-card-foreground">
                      {template.name}
                    </CardDescription>
                    <div className="mt-4">
                       {template.isFree ? (
                          <Link href="#" className={cn(badgeVariants({ variant: 'default' }), 'text-sm')}>
                            {template.price}
                          </Link>
                       ) : (
                         <Badge variant="default" className="text-sm">
                           {template.price}
                         </Badge>
                       )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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
                {aboutValues.map((value) => (
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
      </section>

      {/* Contact Section */}
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
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <Card className="bg-background">
                <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="How can we help you?" {...field} className="min-h-[120px]" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full" size="lg">Send Message</Button>
                    </form>
                    </Form>
                </CardContent>
                </Card>
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
                    <p className="text-muted-foreground">
                        Reach out to us directly through any of the channels below. We are available during standard business hours to assist you with your inquiries.
                    </p>
                    <div className="space-y-4">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="flex-shrink-0 bg-primary/10 text-primary rounded-md h-10 w-10 flex items-center justify-center">
                                <detail.icon className="h-5 w-5" />
                            </div>
                            {detail.href ? (
                                <a href={detail.href} className="text-lg text-muted-foreground hover:text-primary transition-colors">{detail.text}</a>
                            ) : (
                                <p className="text-lg text-muted-foreground">{detail.text}</p>
                            )}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
