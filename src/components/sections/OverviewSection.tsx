import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, BookOpen, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const OverviewSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const overviewItems = [
    {
      title: t('overview.setting.title'),
      content: t('overview.setting.text'),
      icon: MapPin,
    },
    {
      title: t('overview.allegory.title'),
      content: t('overview.allegory.text'),
      icon: BookOpen,
    },
    {
      title: t('overview.significance.title'),
      content: t('overview.significance.text'),
      icon: Star,
    },
  ];

  return (
    <section ref={ref} id="overview" className="py-16 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="font-propaganda text-3xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-6 tracking-wide">
            {t('overview.title')}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {overviewItems.map((item, index) => (
            <Card 
              key={index} 
              className={`border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg md:text-xl font-serif text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed text-center text-sm md:text-base">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;