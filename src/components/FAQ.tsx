
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What makes Ezora Pix different from other photobooths?',
      answer: 'We combine cartoon-inspired aesthetics with gallery-level sophistication. Our AR filters and custom layouts create a unique artistic experience that transforms your event into an interactive art exhibition.',
    },
    {
      question: 'How long does setup take?',
      answer: 'Our professional team handles complete setup in 30-45 minutes. We arrive early to ensure everything is perfectly calibrated and tested before your guests arrive.',
    },
    {
      question: 'Can we customize the experience for our brand?',
      answer: 'Absolutely! We offer custom branding, themed layouts, and personalized AR filters. Our design team works with you to create a cohesive experience that matches your event aesthetic.',
    },
    {
      question: 'What happens to the photos after the event?',
      answer: 'All photos are instantly accessible through our digital gallery platform. Guests receive immediate access via QR code, and you get a complete archive with high-resolution downloads.',
    },
    {
      question: 'Do you provide attendants during the event?',
      answer: 'Yes! All packages include a trained event coordinator who ensures smooth operation, assists guests, and captures the best moments throughout your celebration.',
    },
    {
      question: 'What if we need to reschedule?',
      answer: 'We understand events change. We offer flexible rescheduling options up to 48 hours before your event date, subject to availability.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-24 h-24 border border-pastel-purple/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 border border-pastel-pink/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Curator's</span> Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about commissioning your photobooth masterpiece.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 hover:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline group">
                    <span className="text-lg font-semibold gradient-text group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our curator team is here to help design your perfect experience.
              </p>
              <button className="gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                Contact Our Curators
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
