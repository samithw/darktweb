import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type TemplateCardProps = {
  imageUrl: string;
  name: string;
  price: string;
  isFree: boolean;
  imageHint: string;
  imageWidth: number;
  imageHeight: number;
  downloadUrl?: string;
};

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2"
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


export default function TemplateCard({
  imageUrl,
  name,
  price,
  isFree,
  imageHint,
  imageWidth,
  imageHeight,
  downloadUrl
}: TemplateCardProps) {
  const whatsappNumber = "94760311037";
  const message = `Hello, I’m interested in purchasing: **${name}**. Please let me know how to proceed.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Card className="overflow-hidden flex flex-col">
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={imageUrl}
            alt={name}
            width={imageWidth}
            height={imageHeight}
            className="object-cover w-full h-full"
            data-ai-hint={imageHint}
          />
        </div>
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <CardDescription className="text-base text-card-foreground">
              {name}
            </CardDescription>
            {isFree ? (
                <p className="text-sm font-semibold text-green-400 mt-2">Free</p>
            ) : (
                <p className="text-sm font-semibold text-foreground mt-2">{price}</p>
            )}
          </div>
          <div className="mt-4">
            {isFree ? (
              <Link href={downloadUrl || '#'} download className={cn(badgeVariants({ variant: 'default' }), 'text-sm w-full justify-center')}>
                Download
              </Link>
            ) : (
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={cn(badgeVariants({ variant: 'default' }), 'text-sm inline-flex items-center')}>
                    <WhatsAppIcon />
                    Buy Now
                </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
