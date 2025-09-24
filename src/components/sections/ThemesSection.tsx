import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, AlertTriangle, MessageCircle, XCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ThemesSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const themes = [
    {
      title: t('themes.equality.title'),
      description: t('themes.equality.description'),
      icon: Scale,
    },
    {
      title: t('themes.corruption.title'),
      description: t('themes.corruption.description'),
      icon: AlertTriangle,
    },
    {
      title: t('themes.propaganda.title'),
      description: t('themes.propaganda.description'),
      icon: MessageCircle,
    },
    {
      title: t('themes.betrayal.title'),
      description: t('themes.betrayal.description'),
      icon: XCircle,
    },
  ];

  return (
    <section ref={ref} id="themes" className="py-16 md:py-20 px-4 md:px-6 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-farm-gradient opacity-5" />
      <div className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 border-4 border-primary/20 rotate-45 rounded-lg hidden lg:block" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className={`text-center mb-12 md:mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="font-propaganda text-3xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-6 tracking-wide">
            {t('themes.title')}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {themes.map((theme, index) => (
            <Card 
              key={index} 
              className={`border-2 border-accent/30 hover:border-accent hover:shadow-lg transition-all duration-300 group bg-card/70 backdrop-blur-sm animate-on-scroll animate-from-${index % 2 === 0 ? 'left' : 'right'} ${isVisible ? `animate-fade-in-${index % 2 === 0 ? 'left' : 'right'}` : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-lg md:text-xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <theme.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <span className="font-serif">{theme.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{theme.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;