import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ChaptersSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const chapters = Array.from({ length: 10 }, (_, i) => ({
    number: i + 1,
    title: t(`chapters.${i + 1}.title`),
    content: t(`chapters.${i + 1}.content`),
  }));

  return (
    <section ref={ref} id="chapters" className="py-16 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="font-propaganda text-3xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-6 tracking-wide">
            {t('chapters.title')}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {chapters.map((chapter, index) => (
            <Card 
              key={chapter.number} 
              className={`border-l-4 border-l-accent hover:shadow-lg transition-all duration-300 group animate-on-scroll animate-from-left ${isVisible ? 'animate-fade-in-left' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3">
                  <span className="bg-accent text-accent-foreground w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold group-hover:scale-110 transition-transform">
                    {chapter.number}
                  </span>
                  <span className="font-serif text-sm md:text-lg">{chapter.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{chapter.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;