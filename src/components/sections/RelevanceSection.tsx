import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Smartphone, Shield, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const RelevanceSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const relevanceItems = [
    {
      title: t('relevance.politics.title'),
      description: t('relevance.politics.description'),
      icon: Users,
    },
    {
      title: t('relevance.media.title'),
      description: t('relevance.media.description'),
      icon: Smartphone,
    },
    {
      title: t('relevance.leadership.title'),
      description: t('relevance.leadership.description'),
      icon: Shield,
    },
    {
      title: t('relevance.inequality.title'),
      description: t('relevance.inequality.description'),
      icon: TrendingUp,
    },
  ];

  return (
    <section ref={ref} id="relevance" className="py-16 md:py-20 px-4 md:px-6 bg-muted/30 relative">
      {/* Revolutionary background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className={`text-center mb-12 md:mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="font-propaganda text-3xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-6 tracking-wide">
            {t('relevance.title')}
          </h2>
          <div className="w-16 md:w-24 h-1 bg-revolutionary-gradient mx-auto" />
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {relevanceItems.map((item, index) => (
            <Card 
              key={index} 
              className={`border-2 border-secondary/50 hover:border-secondary hover:shadow-lg transition-all duration-300 group bg-card/80 backdrop-blur-sm animate-on-scroll animate-from-${index % 2 === 0 ? 'left' : 'right'} ${isVisible ? `animate-fade-in-${index % 2 === 0 ? 'left' : 'right'}` : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-lg md:text-xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <span className="font-serif">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelevanceSection;