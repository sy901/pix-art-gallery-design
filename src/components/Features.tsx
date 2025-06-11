
import React from 'react';
import { Zap, Camera, Share2, Printer } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: 'AR Filters',
      description: 'Transform your photos with magical augmented reality filters that bring cartoon magic to life.',
    },
    {
      icon: Zap,
      title: 'Instant Capture',
      description: 'Lightning-fast photo processing with real-time preview and editing capabilities.',
    },
    {
      icon: Printer,
      title: 'Instant Prints',
      description: 'High-quality prints delivered immediately, bringing digital magic to physical memories.',
    },
    {
      icon: Share2,
      title: 'Social Sharing',
      description: 'Share your masterpieces instantly across all social platforms with one tap.',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-pastel-purple/10 to-pastel-pink/10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-pastel-blue/10 to-pastel-green/10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Gallery-Grade</span> Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every feature designed with the sophistication of an art museum and the playfulness of a cartoon studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 text-center hover-lift group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-shimmer">
                  <feature.icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
