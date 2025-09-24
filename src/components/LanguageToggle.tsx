import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-lg border border-border overflow-hidden">
        <Button
          variant={language === 'en' ? 'revolutionary' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="rounded-none border-none"
          aria-pressed={language === 'en'}
          aria-label="Switch to English"
        >
          {t('language.english')}
        </Button>
        <Button
          variant={language === 'pt' ? 'revolutionary' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('pt')}
          className="rounded-none border-none"
          aria-pressed={language === 'pt'}
          aria-label="Mudar para Português"
        >
          {t('language.portuguese')}
        </Button>
      </div>
    </div>
  );
};

export default LanguageToggle;