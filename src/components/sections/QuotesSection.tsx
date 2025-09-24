import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';
import revolutionaryAnimals from '@/assets/revolutionary-animals.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const QuotesSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const quotes = Array.from({ length: 5 }, (_, i) => ({
    text: t(`quotes.${i + 1}.text`),
    chapter: t(`quotes.${i + 1}.chapter`),
  }));

  return (
    <section ref={ref} id="quotes" className="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${revolutionaryAnimals})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="font-propaganda text-3xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-6 tracking-wide">
            {t('quotes.title')}
          </h2>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {quotes.map((quote, index) => (
            <Card 
              key={index} 
              className={`border-2 border-primary/20 bg-card/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0 self-start">
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed text-foreground mb-4 font-serif italic">
                      "{quote.text}"
                    </blockquote>
                    <cite className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                      — {quote.chapter}
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;