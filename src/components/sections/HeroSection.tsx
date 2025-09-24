import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import farmHeroImage from '@/assets/farm-hero.jpg';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${farmHeroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="font-propaganda text-4xl md:text-6xl lg:text-8xl text-white text-shadow-dark mb-4 tracking-wider">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-propaganda-gold font-semibold mb-2">
            {t('hero.subtitle')}
          </p>
          <p className="text-base md:text-lg text-white/90 italic">{t('hero.author')}</p>
        </div>

        <div className="max-w-2xl mx-auto"></div>

        {/* Revolutionary accent elements */}
        <div className="absolute -top-10 -left-10 w-16 h-16 md:w-32 md:h-32 border-2 md:border-4 border-primary/30 rotate-45 hidden sm:block" />
        <div className="absolute -bottom-10 -right-10 w-12 h-12 md:w-24 md:h-24 border-2 md:border-4 border-propaganda-gold/40 rotate-12 hidden sm:block" />
      </div>
    </section>
  );
};
export default HeroSection;