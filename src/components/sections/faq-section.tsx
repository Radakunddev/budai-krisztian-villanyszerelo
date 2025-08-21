import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/lib/data/faqs';

export function FAQSection() {
  return (
    <section className="bg-muted/30 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Gyakori kérdések
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            GYIK
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Itt találja a leggyakoribb kérdéseket és válaszokat szolgáltatásaimmal kapcsolatban.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left text-lg font-semibold md:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center md:mt-18 lg:mt-20">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            További kérdései vannak?
          </h3>
          <p className="mb-8 text-lg text-muted-foreground">
            Ne habozzon, lépjen kapcsolatba velem! Szívesen válaszolok minden kérdésére.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/kapcsolat">
                Kapcsolatfelvétel
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="tel:+36301234567">
                Hívjon most
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}