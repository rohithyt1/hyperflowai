import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { CursorFollower } from './CursorFollower';
import { FAQChatWidget } from './FAQChatWidget';
import { useCurrency } from '@/hooks/useCurrency';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { currency, toggleCurrency } = useCurrency();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global space background layer (so it shows on every page) */}
      <div className="space-backdrop fixed inset-0 -z-10" aria-hidden="true" />

      {/* Cursor Follower - Visible on all pages */}
      <CursorFollower />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-glow">HyperFlow</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Currency Toggle */}
              <button
                onClick={toggleCurrency}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all text-sm font-medium"
                title="Switch currency"
              >
                <span className={currency === 'USD' ? 'text-primary' : 'text-muted-foreground'}>$</span>
                <span className="text-muted-foreground">/</span>
                <span className={currency === 'INR' ? 'text-primary' : 'text-muted-foreground'}>₹</span>
              </button>
              
              <Button 
                className="btn-hero"
                onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
              >
                Book Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/50">
              <div className="flex flex-col space-y-4 mt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Currency Toggle */}
                <button
                  onClick={toggleCurrency}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-card/50 w-fit text-sm font-medium"
                >
                  <span className={currency === 'USD' ? 'text-primary' : 'text-muted-foreground'}>$ USD</span>
                  <span className="text-muted-foreground">/</span>
                  <span className={currency === 'INR' ? 'text-primary' : 'text-muted-foreground'}>₹ INR</span>
                </button>
                
                <Button 
                  className="btn-hero w-fit"
                  onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
                >
                  Book Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-glow">HyperFlow</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your AI receptionist that answers every call, books appointments, and never takes a day off. 24/7/365.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href="https://x.com/hypergene0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all">
                  <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/hyper-flow-610a4330b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all">
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
                <a href="https://instagram.com/hyperflow" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all">
                  <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:rohan@hyperflow.space" className="hover:text-primary transition-colors">rohan@hyperflow.space</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+917483815143" className="hover:text-primary transition-colors">+91 7483815143</a>
                </li>
              </ul>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <Link to="/terms" className="block hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="block hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 HyperFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* AI FAQ Chat Widget */}
      <FAQChatWidget />
    </div>
  );
}
