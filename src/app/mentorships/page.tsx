import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Gem, Users, Library } from 'lucide-react';
import Link from 'next/link';

const mentorships = [
  {
    icon: Users,
    title: 'Live Mentorship Program',
    description:
      'For serious traders who want to master the real mechanics of the market in a group setting.',
    price: '18,000 INR',
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
    price: '40,000 INR',
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

export default function MentorshipsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
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
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
