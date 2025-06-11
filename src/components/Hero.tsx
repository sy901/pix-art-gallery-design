
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-pastel-purple/20 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-pastel-pink/30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 rounded-full bg-pastel-blue/25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-pastel-green/20 animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up">
            <span className="block mb-2">Capture Moments,</span>
            <span className="gradient-text block">Create Magic</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Transform your events into masterpieces with our AI-powered photobooth experience. 
            Where cartoons meet gallery sophistication.
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="gradient-primary text-lg font-semibold px-12 py-6 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-glow hover-lift"
            >
              Get Started!
            </Button>
          </div>

          {/* Photobooth UI Mockup */}
          <div className="relative max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="glass-card p-8 hover-lift">
              <div className="bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-white/80">Ezora Pix Studio</span>
                </div>
                <div className="bg-white/20 rounded-xl p-8 text-center">
                  <div className="w-32 h-32 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/50 rounded-full"></div>
                  </div>
                  <p className="text-white font-medium">Ready to capture magic?</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-pastel-blue/20 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-pastel-blue rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">AR Filter</span>
                </div>
                <div className="bg-pastel-pink/20 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-pastel-pink rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Print</span>
                </div>
                <div className="bg-pastel-green/20 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-pastel-green rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
