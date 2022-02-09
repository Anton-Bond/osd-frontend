import { dictionary, locale, _ } from 'svelte-i18n';

import ru from './lang/ru.json';
import main from './lang/en/main.json';
import pages from './lang/en/pages.json';

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
	dictionary.set({
		en: {
			main,
			pages,
		},
		ru,
	});
	locale.set(_locale);
}
export { _, setupI18n };
