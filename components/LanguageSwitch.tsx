'use client';

import { useLanguage } from '@/i18n/LanguageProvider';

export default function LanguageSwitch() {
  const { locale, toggle, t } = useLanguage();
  const isSpanish = locale === 'es';

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={t.languageSwitch.switchTo}
      title={t.languageSwitch.switchTo}
      className='flex items-center gap-1 py-2'
    >
      <span className={isSpanish ? 'font-bold' : 'opacity-60'}>ES</span>
      <span className='opacity-60'>/</span>
      <span className={isSpanish ? 'opacity-60' : 'font-bold'}>EN</span>
    </button>
  );
}
