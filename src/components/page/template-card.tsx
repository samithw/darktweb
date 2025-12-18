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
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
    >
        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" />
    </svg>
);

const DownloadIcon = () => (
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
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
              <Link href={downloadUrl || '#'} download className={cn(badgeVariants({ variant: 'default' }), 'text-sm inline-flex items-center')}>
                <DownloadIcon />
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
