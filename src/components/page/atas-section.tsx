import { atasTemplates } from '@/lib/data';
import TemplateCard from './template-card';

export default function AtasSection() {
    return (
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
                    <TemplateCard
                        key={template.fileName}
                        imageUrl={template.imageUrl}
                        name={template.name}
                        price={template.price}
                        isFree={template.isFree}
                        imageHint={template.imageHint}
                        imageWidth={800}
                        imageHeight={428}
                        downloadUrl={template.downloadUrl}
                    />
                ))}
            </div>
        </section>
    );
}
