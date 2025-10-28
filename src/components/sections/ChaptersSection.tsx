import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// 1. Importar as Imagens para os Capítulos (Capítulos 1 a 10)
import cap01Image from '@/assets/cap01.png';
import cap02Image from '@/assets/cap02.png';
import cap03Image from '@/assets/cap03.png';
import cap04Image from '@/assets/cap04.png';
import cap05Image from '@/assets/cap05.png';
import cap06Image from '@/assets/cap06.png';
import cap07Image from '@/assets/cap07.png';
import cap08Image from '@/assets/cap08.png';
import cap09Image from '@/assets/cap09.png';
import cap10Image from '@/assets/cap10.png';


// 2. Mapeamento de Imagens por Número do Capítulo
const chapterImages: { [key: number]: string | undefined } = {
  1: cap01Image,
  2: cap02Image,
  3: cap03Image,
  4: cap04Image,
  5: cap05Image,
  6: cap06Image,
  7: cap07Image,
  8: cap08Image,
  9: cap09Image,
  10: cap10Image,
};

const ChaptersSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  // 3. Adicionar a propriedade 'image' ao objeto de capítulo
  const chapters = Array.from({ length: 10 }, (_, i) => ({
    number: i + 1,
    title: t(`chapters.${i + 1}.title`),
    content: t(`chapters.${i + 1}.content`),
    image: chapterImages[i + 1],
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
              className={`hover:shadow-xl transition-all duration-300 group animate-on-scroll animate-from-left ${isVisible ? 'animate-fade-in-left' : ''} ${chapter.image ? 'p-0 overflow-hidden border-2 border-primary/20 hover:border-primary/40' : 'border-l-4 border-l-accent'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* 4. Bloco de Imagem Condicional */}
              {chapter.image && (
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={chapter.image} 
                    alt={`Ilustração do Capítulo ${chapter.number}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              )}

              {/* 5. Conteúdo do Card (Cabeçalho e Corpo) */}
              <div className={`p-6 ${!chapter.image ? 'pt-0' : ''}`}>
                <CardHeader className={`${chapter.image ? 'p-0 mb-3' : 'p-0 pb-3'}`}>
                  <CardTitle className="flex items-center gap-3">
                    <span className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-transform ${chapter.image ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground group-hover:scale-110'}`}>
                      {chapter.number}
                    </span>
                    <span className={`font-serif text-sm md:text-lg ${chapter.image ? 'text-primary' : 'text-foreground'}`}>{chapter.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{chapter.content}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;