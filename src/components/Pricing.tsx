
import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Frame & Flash',
      price: 299,
      description: 'Perfect for intimate gatherings',
      features: [
        '2 hours of photobooth fun',
        'Basic AR filters collection',
        '50 instant prints included',
        'Digital gallery access',
        'Basic customization options',
      ],
      isPopular: false,
    },
    {
      name: 'Multiverse Strip',
      price: 599,
      description: 'Our most popular package',
      features: [
        '4 hours of unlimited magic',
        'Premium AR filters & animations',
        '100 instant prints included',
        'Custom branding & layouts',
        'Live social media sharing',
        'Dedicated event coordinator',
        'HD video messages',
      ],
      isPopular: true,
    },
    {
      name: 'Gallery Masterpiece',
      price: 999,
      description: 'The ultimate art experience',
      features: [
        'Full day event coverage',
        'Exclusive cartoon artist filters',
        'Unlimited prints & sharing',
        'Custom backdrop design',
        'Professional event curator',
        'Multi-location setup',
        '4K video capabilities',
        'Post-event digital album',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pastel-purple/5 to-pastel-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pastel-blue/5 to-pastel-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Commission</span> Your Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your canvas size. Every package includes our signature cartoon-meets-gallery magic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative animate-fade-in-up ${
                plan.isPopular ? 'scale-105 z-10' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star size={16} className="fill-current" />
                    <span>Recommended</span>
                  </div>
                </div>
              )}

              <div className={`neumorphic p-8 rounded-3xl hover-lift group ${
                plan.isPopular ? 'ring-2 ring-primary/20 shadow-2xl' : ''
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold gradient-text mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground ml-2">/event</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full font-semibold rounded-full transition-all duration-300 ${
                    plan.isPopular
                      ? 'gradient-primary text-white hover:scale-105 animate-glow'
                      : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  size="lg"
                >
                  {plan.isPopular ? 'Start Creating Magic' : 'Choose This Package'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="max-w-4xl mx-auto glass-card p-12">
            <h3 className="text-3xl font-bold mb-6 gradient-text tracking-tight">
              We turn events into masterpieces
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed font-light tracking-wide">
              Every moment deserves to be captured with the sophistication of a gallery exhibition 
              and the joy of a cartoon adventure. Let us curate your perfect photobooth experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
