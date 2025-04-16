// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi) // Загрузка переводов через HTTP
    .use(LanguageDetector) // Определение языка
    .use(initReactI18next) // Инициализация для React
    .init({
        supportedLngs: ['de', 'en'], // Наши поддерживаемые языки
        fallbackLng: 'de', // Язык по умолчанию, если определение не удалось
        debug: true, // Включить вывод отладочной информации в консоль (полезно при разработке)
        detection: {
            // Порядок и источники определения языка
            order: ['localStorage', 'navigator'], // Сначала смотрим в localStorage, потом настройки браузера
            caches: ['localStorage'], // Где кешировать выбранный язык
        },
        backend: {
            // Путь к файлам перевода (относительно папки public)
            // {{lng}} будет заменен на код языка (de или en)
            loadPath: '/locales/{{lng}}/translation.json',
        },
        interpolation: {
            escapeValue: false, // Не нужно экранировать значения, React делает это сам
        },
    });

export default i18n;