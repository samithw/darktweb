
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
import Logo from '../../../public/images/dt-logo.jpg';
import { Award, Target, Eye, CheckCircle, Gem, Users, Library, Mail, Phone, MapPin } from 'lucide-react';

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
    price: '36,000 LKR',
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
    price: '80,000 LKR',
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

const sierraChartTemplates = Array.from({ length: 22 }, (_, i) => ({
  name: `Chart Template ${i + 1}`,
  imageUrl: `https://picsum.photos/seed/sierra${i + 1}/400/300`,
  description: `A brief description for chart template ${i + 1}.`,
  imageHint: 'chart template'
}));

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'home-hero');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');
  const atasImage = PlaceHolderImages.find((img) => img.id === 'atas-template');
  const mt5Image = PlaceHolderImages.find((img) => img.id === 'mt5-template');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

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
                <div className="flex items-center gap-4">
                  <mentorship.icon className="h-10 w-10 text-primary" />
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
              <Card key={template.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={template.imageUrl}
                      alt={template.name}
                      width={400}
                      height={300}
                      className="object-cover"
                      data-ai-hint={template.imageHint}
                    />
                  </div>
                  <div className="p-4">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription className="mt-2 text-sm">
                      {template.description}
                    </CardDescription>
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
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {atasImage && (
              <Image
                src={atasImage.imageUrl}
                alt={atasImage.description}
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                data-ai-hint={atasImage.imageHint}
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
              <Link href="#contact">Get Templates</Link>
            </Button>
          </div>
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
                    <Link href="#contact">Get Templates</Link>
                </Button>
                </div>
                <div>
                {mt5Image && (
                    <Image
                    src={mt5Image.imageUrl}
                    alt={mt5Image.description}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl"
                    data-ai-hint={mt5Image.imageHint}
                    />
                )}
                </div>
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

    