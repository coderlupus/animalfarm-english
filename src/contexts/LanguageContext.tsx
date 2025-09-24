import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.overview': 'Overview',
    'nav.chapters': 'Chapters',
    'nav.characters': 'Characters',
    'nav.themes': 'Themes',
    'nav.quotes': 'Quotes',
    'nav.relevance': 'Today',
    
    // Hero Section
    'hero.title': 'Animal Farm',
    'hero.subtitle': 'A Revolutionary Tale of Power, Corruption, and Betrayal',
    'hero.author': 'by George Orwell',
    'hero.description': 'An allegorical novella that reflects the Russian Revolution and critiques totalitarianism through the lens of farm animals who rebel against their human owner.',
    
    // Overview
    'overview.title': 'Overview',
    'overview.setting.title': 'Setting',
    'overview.setting.text': 'Manor Farm in England, later renamed Animal Farm',
    'overview.allegory.title': 'Allegory',
    'overview.allegory.text': 'The story mirrors the Russian Revolution and the rise of Stalin\'s Soviet Union',
    'overview.significance.title': 'Significance',
    'overview.significance.text': 'A powerful critique of totalitarianism and the corruption of revolutionary ideals',
    
    // Chapters
    'chapters.title': 'Chapter Highlights',
    'chapters.1.title': 'Chapter 1',
    'chapters.1.content': 'Old Major\'s revolutionary speech and the song "Beasts of England"',
    'chapters.2.title': 'Chapter 2',
    'chapters.2.content': 'The rebellion begins; Jones is overthrown; Seven Commandments established',
    'chapters.3.title': 'Chapter 3',
    'chapters.3.content': 'Animals work together successfully; pigs begin to take leadership roles',
    'chapters.4.title': 'Chapter 4',
    'chapters.4.content': 'Battle of Cowshed; animals defend their revolution against humans',
    'chapters.5.title': 'Chapter 5',
    'chapters.5.content': 'Snowball vs Napoleon conflict; windmill debate; Snowball expelled',
    'chapters.6.title': 'Chapter 6',
    'chapters.6.content': 'Napoleon\'s rule begins; commandments start changing; trade with humans',
    'chapters.7.title': 'Chapter 7',
    'chapters.7.content': 'Food shortages; show trials and executions; reign of terror begins',
    'chapters.8.title': 'Chapter 8',
    'chapters.8.content': 'Battle of Windmill; Napoleon\'s cult of personality grows',
    'chapters.9.title': 'Chapter 9',
    'chapters.9.content': 'Boxer\'s death; animals\' conditions worsen under Napoleon',
    'chapters.10.title': 'Chapter 10',
    'chapters.10.content': 'Pigs become indistinguishable from humans; "All animals are equal, but some are more equal than others"',
    
    // Characters
    'characters.title': 'Main Characters',
    'characters.napoleon.name': 'Napoleon',
    'characters.napoleon.description': 'Represents Stalin - the power-hungry pig who becomes a dictator',
    'characters.snowball.name': 'Snowball',
    'characters.snowball.description': 'Represents Trotsky - the intellectual pig expelled by Napoleon',
    'characters.boxer.name': 'Boxer',
    'characters.boxer.description': 'Represents the working class - loyal, hardworking horse who trusts the pigs',
    'characters.squealer.name': 'Squealer',
    'characters.squealer.description': 'Represents propaganda - Napoleon\'s persuasive spokesperson',
    'characters.oldmajor.name': 'Old Major',
    'characters.oldmajor.description': 'Represents Marx/Lenin - the visionary pig who inspires the revolution',
    
    // Themes
    'themes.title': 'Major Themes',
    'themes.equality.title': 'Equality vs Inequality',
    'themes.equality.description': 'The gradual erosion of equality as the pigs claim special privileges',
    'themes.corruption.title': 'Corruption of Power',
    'themes.corruption.description': 'How revolutionary leaders become the oppressors they once fought against',
    'themes.propaganda.title': 'Propaganda & Language',
    'themes.propaganda.description': 'The manipulation of language to control thought and justify actions',
    'themes.betrayal.title': 'Betrayal of Ideals',
    'themes.betrayal.description': 'How noble revolutionary goals are abandoned for personal gain',
    
    // Quotes
    'quotes.title': 'Important Quotes',
    'quotes.1.text': 'All animals are equal, but some animals are more equal than others.',
    'quotes.1.chapter': 'Chapter 10',
    'quotes.2.text': 'Four legs good, two legs bad.',
    'quotes.2.chapter': 'Chapter 3',
    'quotes.3.text': 'The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.',
    'quotes.3.chapter': 'Chapter 10',
    'quotes.4.text': 'Napoleon is always right.',
    'quotes.4.chapter': 'Chapter 5',
    'quotes.5.text': 'No one believes more firmly than Comrade Napoleon that all animals are equal.',
    'quotes.5.chapter': 'Chapter 8',
    
    // Relevance
    'relevance.title': 'Relevance Today',
    'relevance.politics.title': 'Political Manipulation',
    'relevance.politics.description': 'Authoritarian leaders still use propaganda and fear to maintain control',
    'relevance.media.title': 'Social Media & "Truth"',
    'relevance.media.description': 'Information manipulation and "alternative facts" in the digital age',
    'relevance.leadership.title': 'Leadership Accountability',
    'relevance.leadership.description': 'The importance of questioning authority and holding leaders accountable',
    'relevance.inequality.title': 'Economic Inequality',
    'relevance.inequality.description': 'Growing wealth gaps and the concentration of power in few hands',
    
    // UI Elements
    'language.toggle': 'Language',
    'language.english': 'English',
    'language.portuguese': 'Portuguese',
    'footer.ourGroup': 'Our group: Nathan Lopes, Tomé Galileu, Anderson Gabriel, Assucena Dantas • 2025'
  },
  pt: {
    // Navigation
    'nav.overview': 'Visão Geral',
    'nav.chapters': 'Capítulos',
    'nav.characters': 'Personagens',
    'nav.themes': 'Temas',
    'nav.quotes': 'Citações',
    'nav.relevance': 'Hoje',
    
    // Hero Section
    'hero.title': 'A Revolução dos Bichos',
    'hero.subtitle': 'Uma História Revolucionária de Poder, Corrupção e Traição',
    'hero.author': 'por George Orwell',
    'hero.description': 'Uma novela alegórica que reflete a Revolução Russa e critica o totalitarismo através da perspectiva de animais de fazenda que se rebelam contra seu dono humano.',
    
    // Overview
    'overview.title': 'Visão Geral',
    'overview.setting.title': 'Cenário',
    'overview.setting.text': 'Fazenda do Solar na Inglaterra, depois renomeada para Fazenda dos Bichos',
    'overview.allegory.title': 'Alegoria',
    'overview.allegory.text': 'A história espelha a Revolução Russa e a ascensão da União Soviética de Stalin',
    'overview.significance.title': 'Significância',
    'overview.significance.text': 'Uma poderosa crítica ao totalitarismo e à corrupção dos ideais revolucionários',
    
    // Chapters
    'chapters.title': 'Destaques dos Capítulos',
    'chapters.1.title': 'Capítulo 1',
    'chapters.1.content': 'Discurso revolucionário do Major e a canção "Bichos da Inglaterra"',
    'chapters.2.title': 'Capítulo 2',
    'chapters.2.content': 'A rebelião começa; Jones é derrubado; Sete Mandamentos estabelecidos',
    'chapters.3.title': 'Capítulo 3',
    'chapters.3.content': 'Os animais trabalham juntos com sucesso; porcos começam a assumir liderança',
    'chapters.4.title': 'Capítulo 4',
    'chapters.4.content': 'Batalha do Estábulo; animais defendem sua revolução contra humanos',
    'chapters.5.title': 'Capítulo 5',
    'chapters.5.content': 'Conflito Bola de Neve vs Napoleão; debate do moinho; Bola de Neve expulso',
    'chapters.6.title': 'Capítulo 6',
    'chapters.6.content': 'Governo de Napoleão começa; mandamentos começam a mudar; comércio com humanos',
    'chapters.7.title': 'Capítulo 7',
    'chapters.7.content': 'Escassez de alimentos; julgamentos e execuções; reino do terror começa',
    'chapters.8.title': 'Capítulo 8',
    'chapters.8.content': 'Batalha do Moinho de Vento; culto à personalidade de Napoleão cresce',
    'chapters.9.title': 'Capítulo 9',
    'chapters.9.content': 'Morte de Boxeador; condições dos animais pioram sob Napoleão',
    'chapters.10.title': 'Capítulo 10',
    'chapters.10.content': 'Porcos tornam-se indistinguíveis dos humanos; "Todos os animais são iguais, mas alguns são mais iguais que outros"',
    
    // Characters
    'characters.title': 'Personagens Principais',
    'characters.napoleon.name': 'Napoleão',
    'characters.napoleon.description': 'Representa Stalin - o porco sedento de poder que se torna ditador',
    'characters.snowball.name': 'Bola de Neve',
    'characters.snowball.description': 'Representa Trotsky - o porco intelectual expulso por Napoleão',
    'characters.boxer.name': 'Boxeador',
    'characters.boxer.description': 'Representa a classe trabalhadora - cavalo leal e trabalhador que confia nos porcos',
    'characters.squealer.name': 'Garganta',
    'characters.squealer.description': 'Representa a propaganda - porta-voz persuasivo de Napoleão',
    'characters.oldmajor.name': 'Major',
    'characters.oldmajor.description': 'Representa Marx/Lenin - o porco visionário que inspira a revolução',
    
    // Themes
    'themes.title': 'Temas Principais',
    'themes.equality.title': 'Igualdade vs Desigualdade',
    'themes.equality.description': 'A erosão gradual da igualdade conforme os porcos reivindicam privilégios especiais',
    'themes.corruption.title': 'Corrupção do Poder',
    'themes.corruption.description': 'Como líderes revolucionários se tornam os opressores que outrora combateram',
    'themes.propaganda.title': 'Propaganda e Linguagem',
    'themes.propaganda.description': 'A manipulação da linguagem para controlar o pensamento e justificar ações',
    'themes.betrayal.title': 'Traição dos Ideais',
    'themes.betrayal.description': 'Como objetivos revolucionários nobres são abandonados por ganho pessoal',
    
    // Quotes
    'quotes.title': 'Citações Importantes',
    'quotes.1.text': 'Todos os animais são iguais, mas alguns animais são mais iguais que outros.',
    'quotes.1.chapter': 'Capítulo 10',
    'quotes.2.text': 'Quatro pernas bom, duas pernas ruim.',
    'quotes.2.chapter': 'Capítulo 3',
    'quotes.3.text': 'As criaturas do lado de fora olharam do porco para o homem, e do homem para o porco, e do porco para o homem novamente; mas já era impossível dizer qual era qual.',
    'quotes.3.chapter': 'Capítulo 10',
    'quotes.4.text': 'Napoleão está sempre certo.',
    'quotes.4.chapter': 'Capítulo 5',
    'quotes.5.text': 'Ninguém acredita mais firmemente que o Camarada Napoleão que todos os animais são iguais.',
    'quotes.5.chapter': 'Capítulo 8',
    
    // Relevance
    'relevance.title': 'Relevância Hoje',
    'relevance.politics.title': 'Manipulação Política',
    'relevance.politics.description': 'Líderes autoritários ainda usam propaganda e medo para manter controle',
    'relevance.media.title': 'Mídias Sociais e "Verdade"',
    'relevance.media.description': 'Manipulação de informação e "fatos alternativos" na era digital',
    'relevance.leadership.title': 'Responsabilização da Liderança',
    'relevance.leadership.description': 'A importância de questionar autoridade e responsabilizar líderes',
    'relevance.inequality.title': 'Desigualdade Econômica',
    'relevance.inequality.description': 'Crescimento das disparidades de renda e concentração de poder em poucas mãos',
    
    // UI Elements
    'language.toggle': 'Idioma',
    'language.english': 'Inglês',
    'language.portuguese': 'Português',
    'footer.ourGroup': 'Nosso grupo: Nathan Lopes, Tomé Galileu, Anderson Gabriel, Assucena Dantas • 2025'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    const lang = translations[language] || translations.en;
    const translation = lang[key as keyof typeof lang] || translations.en[key as keyof typeof translations.en];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};