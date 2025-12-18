import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
            {!isFree && (
                <p className="text-sm text-muted-foreground mt-2">{price}</p>
            )}
          </div>
          <div className="mt-4">
            {isFree ? (
              <Link href={downloadUrl || '#'} download className={cn(badgeVariants({ variant: 'default' }), 'text-sm')}>
                {price}
              </Link>
            ) : (
                <Button asChild size="sm" className="w-full">
                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Buy Now
                    </Link>
                </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}