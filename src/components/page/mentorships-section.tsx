import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Gift } from 'lucide-react';
import { mentorships, commonBenefits } from '@/lib/data.tsx';

export default function MentorshipsSection() {
    return (
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
                        className={`flex flex-col ${mentorship.highlight ? 'border-primary ring-2 ring-primary shadow-lg' : ''
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
                    {commonBenefits.slice(0, 4).map((benefit) => (
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
                                {commonBenefits.find(b => b.icon === Gift)?.subPoints?.map((point, index) => (
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
    );
}
