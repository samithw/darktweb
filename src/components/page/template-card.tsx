import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type TemplateCardProps = {
  imageUrl: string;
  name: string;
  price: string;
  isFree: boolean;
  imageHint: string;
  imageWidth: number;
  imageHeight: number;
};

export default function TemplateCard({
  imageUrl,
  name,
  price,
  isFree,
  imageHint,
  imageWidth,
  imageHeight,
}: TemplateCardProps) {
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
          <CardDescription className="text-base text-card-foreground">
            {name}
          </CardDescription>
          <div className="mt-4">
            {isFree ? (
              <Link href="#" className={cn(badgeVariants({ variant: 'default' }), 'text-sm')}>
                {price}
              </Link>
            ) : (
              <Badge variant="default" className="text-sm">
                {price}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
