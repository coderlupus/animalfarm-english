import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'overview', href: '#overview', label: t('nav.overview') },
    { key: 'chapters', href: '#chapters', label: t('nav.chapters') },
    { key: 'characters', href: '#characters', label: t('nav.characters') },
    { key: 'themes', href: '#themes', label: t('nav.themes') },
    { key: 'quotes', href: '#quotes', label: t('nav.quotes') },
    { key: 'relevance', href: '#relevance', label: t('nav.relevance') },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      setIsScrolled(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-propaganda text-xl transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-primary hover:text-accent' : 'text-white hover:text-gray-200'
            }`}
          >
            {t('hero.title')}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.key}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={isScrolled ? "hover:text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"}
              >
                {item.label}
              </Button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled || isMobileMenuOpen ? "" : "text-white"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t ${isScrolled || isMobileMenuOpen ? "border-border" : "border-white/20"}`}>
            <div className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`justify-start ${isScrolled || isMobileMenuOpen ? "hover:text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;