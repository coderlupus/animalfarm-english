import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import revolutionIcon from '@/assets/revolution-icon.png';
const Footer: React.FC = () => {
  const {
    t
  } = useLanguage();
  return <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          
          <h3 className="font-propaganda text-2xl tracking-wide">
            {t('hero.title')}
          </h3>
        </div>
        
        <p className="text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <div className="border-t border-primary-foreground/20 pt-6 mt-6">
          <p className="text-sm text-primary-foreground/60">
            Our group: Nathan Lopes, Tomé Galileu, Anderson, Assucena • 2025
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;