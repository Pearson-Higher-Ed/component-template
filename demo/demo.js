import React         from 'react';
import ReactDOM      from 'react-dom';
import IntlInjection from './IntlInjection';

import { addLocaleData, IntlProvider } from 'react-intl';

// Import Translations...
import frJson       from './translations/fr.json';
import frLocaleData from 'react-intl/locale-data/fr';

import enUSJson       from './translations/en-US.json';
import enUSLocaleData from 'react-intl/locale-data/en';

// Associate Language Abbreviation with json filename...
const translations = {
  'fr'    : frJson,
  'en-US' : enUSJson
};

// Add Language
addLocaleData(frLocaleData);
addLocaleData(enUSLocaleData);

// Determining the User's Locale
const locale = (navigator.language) ? navigator.language : navigator.browserLanguage;

ReactDOM.render(
  <IntlProvider locale={locale || 'en'} key={locale} messages={translations[locale]}>
    <IntlInjection />
  </IntlProvider>,
  document.getElementById('app')
)

// Force locale to French for the purpose of simplifying the demo
ReactDOM.render(
  <IntlProvider locale={'fr'} key={'fr'} messages={translations['fr']}>
    <IntlInjection />
  </IntlProvider>,
  document.getElementById('translationDemo')
)
