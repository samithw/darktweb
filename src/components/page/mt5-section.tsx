import { mt5Templates } from '@/lib/data.tsx';
import TemplateCard from './template-card';

export default function Mt5Section() {
    return (
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
                        <TemplateCard
                            key={template.fileName}
                            imageUrl={template.imageUrl}
                            name={template.name}
                            price={template.price}
                            isFree={template.isFree}
                            imageHint={template.imageHint}
                            imageWidth={800}
                            imageHeight={406}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
