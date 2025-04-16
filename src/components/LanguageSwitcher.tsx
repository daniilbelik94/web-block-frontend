// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Stack } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation(); // Получаем инстанс i18n

    // Функция для смены языка
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng); // Метод i18next для смены языка
    };

    // Получаем текущий язык ('de-DE', 'en-US' и т.д.)
    const currentLanguage = i18n.language;
    // Получаем список поддерживаемых языков из конфига i18n
    const supportedLanguages = i18n.options.supportedLngs || ['de', 'en'];
    // Убираем языки типа 'cimode' или 'debug' если они есть
    const displayLanguages = supportedLanguages.filter(lng => lng.length === 2);


    return (
        // Используем Stack для расположения кнопок в ряд с отступом
        <Stack direction="row" spacing={1}>
            {displayLanguages.map((lng) => (
                <Button
                    key={lng}
                    size="small" // Маленький размер для хедера
                    // Делаем активную кнопку 'contained', остальные 'outlined'
                    variant={currentLanguage.startsWith(lng) ? 'contained' : 'outlined'}
                    color="primary" // Используем основной цвет
                    onClick={() => changeLanguage(lng)}
                    sx={{
                        minWidth: '40px', // Небольшая минимальная ширина
                        // Можно сделать текст активной кнопки жирнее
                        fontWeight: currentLanguage.startsWith(lng) ? 'bold' : 'normal',
                    }}
                >
                    {/* Показываем язык в верхнем регистре (DE, EN) */}
                    {lng.toUpperCase()}
                </Button>
            ))}
        </Stack>
    );
};

export default LanguageSwitcher;