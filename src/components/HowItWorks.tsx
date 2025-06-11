
import React from 'react';
import { UserPlus, Palette, Share } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Registration',
      description: 'Quick setup with your event details and preferences. Our curators help customize your experience.',
      color: 'from-pastel-purple to-pastel-pink',
    },
    {
      icon: Palette,
      title: 'Customization',
      description: 'Choose from our gallery of AR filters, layouts, and cartoon-inspired themes for your booth.',
      color: 'from-pastel-pink to-pastel-blue',
    },
    {
      icon: Share,
      title: 'Sharing',
      description: 'Instant prints and digital sharing turn every moment into a masterpiece ready for the world.',
      color: 'from-pastel-blue to-pastel-green',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-32 w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">Ezora Pix</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three delightfully illustrated steps to transform your event into an art exhibition.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-blue"></div>

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="text-center relative animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl mx-auto flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 group animate-shimmer`}>
                    <step.icon size={40} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="glass-card p-8 hover-lift">
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
