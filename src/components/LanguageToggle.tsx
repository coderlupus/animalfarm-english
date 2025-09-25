import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
      <div className="flex rounded-lg border border-border overflow-hidden">
        <Button
          variant={language === 'en' ? 'revolutionary' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="rounded-none border-none"
          aria-pressed={language === 'en'}
          aria-label="Switch to English"
        >
          English
        </Button>
        <Button
          variant={language === 'pt' ? 'revolutionary' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('pt')}
          className="rounded-none border-none"
          aria-pressed={language === 'pt'}
          aria-label="Mudar para Português"
        >
          Português
        </Button>
      </div>
  );
};

export default LanguageToggle;