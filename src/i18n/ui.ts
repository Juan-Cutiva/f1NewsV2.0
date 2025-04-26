export const languages = {
	es: 'Español',
	en: 'English'
};

export const defaultLang = 'es';

import es from './lang/es';
import en from './lang/en';

export const ui = { es, en } as const;
