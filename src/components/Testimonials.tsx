import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    name: 'Sarah Chen',
    role: 'Wedding Planner',
    image: '🎨',
    quote: 'Ezora Pix transformed our wedding into a magical art gallery experience.',
    stats: '300+ photos, 5 hours of pure joy!'
  }, {
    name: 'Marcus Rodriguez',
    role: 'Corporate Event Manager',
    image: '🎭',
    quote: 'The cartoon-meets-gallery aesthetic was perfect for our product launch.',
    stats: '500+ photos at one party!'
  }, {
    name: 'Emily Foster',
    role: 'Birthday Party Host',
    image: '🎪',
    quote: 'My daughter felt like a princess in her own art museum.',
    stats: '200+ magical moments captured!'
  }, {
    name: 'David Kim',
    role: 'College Event Coordinator',
    image: '🎨',
    quote: 'Students couldn\'t stop talking about the photobooth experience.',
    stats: '1000+ photos, endless memories!'
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-16 h-16 border-2 border-pastel-purple/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 border-2 border-pastel-pink/20 rounded-full animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 border-2 border-pastel-blue/20 rounded-full animate-pulse" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Masterpiece</span> Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stories from our gallery of satisfied customers who turned their events into art.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="glass-card p-12 text-center hover-lift animate-scale-in">
            <div className="mb-8">
              <div className="w-20 h-20 text-4xl bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-full mx-auto flex items-center justify-center shadow-lg mb-4">
                {testimonials[currentIndex].image}
              </div>
              <h3 className="text-2xl font-semibold gradient-text">{testimonials[currentIndex].name}</h3>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>

            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-foreground/90">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3">
              <span className="text-lg font-semibold gradient-text">{testimonials[currentIndex].stats}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-6 mt-8 bg-violet-300 rounded-none">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="glass rounded-full hover:scale-110 transition-all duration-300">
              <ChevronLeft size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gradient-to-r from-primary to-accent scale-125' : 'bg-muted hover:bg-muted-foreground/50'}`} />)}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="glass rounded-full hover:scale-110 transition-all duration-300">
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;