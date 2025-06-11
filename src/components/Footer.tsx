
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-pastel-purple/5 rounded-full animate-float"></div>
        <div className="absolute top-10 left-20 w-16 h-16 bg-pastel-pink/5 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-3xl font-bold gradient-text">Ezora Pix</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Where cartoon magic meets gallery sophistication. Transform your events into 
              masterpieces with our AI-powered photobooth experiences.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="text-sm">📸</span>
              </div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="text-sm">🎨</span>
              </div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="text-sm">✨</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-3">
              {['Features', 'How It Works', 'Pricing', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>hello@ezorapix.com</p>
              <p>1-800-EZORA-PIX</p>
              <p>Available 24/7 for your events</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>for unforgettable moments</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 Ezora Pix. All rights reserved.
            </div>
          </div>
        </div>

        {/* Hidden Mascot */}
        <div className="absolute bottom-4 right-4 text-2xl animate-float opacity-50 hover:opacity-100 transition-opacity duration-300">
          👋
        </div>
      </div>
    </footer>
  );
};

export default Footer;
