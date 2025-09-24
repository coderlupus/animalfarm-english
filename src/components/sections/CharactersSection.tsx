import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Crown, Zap, Heart, Volume2, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CharactersSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const characters = [
    {
      name: t('characters.napoleon.name'),
      description: t('characters.napoleon.description'),
      icon: Crown,
      color: 'text-primary',
    },
    {
      name: t('characters.snowball.name'),
      description: t('characters.snowball.description'),
      icon: Zap,
      color: 'text-accent',
    },
    {
      name: t('characters.boxer.name'),
      description: t('characters.boxer.description'),
      icon: Heart,
      color: 'text-secondary',
    },
    {
      name: t('characters.squealer.name'),
      description: t('characters.squealer.description'),
      icon: Volume2,
      color: 'text-propaganda-red',
    },
    {
      name: t('characters.oldmajor.name'),
      description: t('characters.oldmajor.description'),
      icon: Lightbulb,
      color: 'text-propaganda-gold',
    },
  ];

  return (
    <section ref={ref} id="characters" className="py-16 md:py-20 px-4 md:px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="font-propaganda text-3xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-6 tracking-wide">
            {t('characters.title')}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {characters.map((character, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm animate-on-scroll animate-scale ${isVisible ? 'animate-scale-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 w-12 h-12 md:w-16 md:h-16 bg-background border-2 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${character.color}`}>
                  <character.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <CardTitle className="text-lg md:text-xl font-serif">{character.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-center text-sm md:text-base">{character.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;