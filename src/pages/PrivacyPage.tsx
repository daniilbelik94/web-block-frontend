// src/pages/PrivacyPage.tsx
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, CircularProgress, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';


const PrivacyPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            setError(null);
            const lang = i18n.language.startsWith('de') ? 'de' : 'en'; // Определяем язык для API
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            try {
                const response = await fetch(`<span class="math-inline">\{API\_BASE\_URL\}/api/pages/datenschutz?lang\=</span>{lang}`); // <-- Строим полный URL
                // ... остальная логика fetch ...
            // <-- ИЗМЕНИТЕ URL API!
                if (!response.ok) {
                    throw new Error(t('legalPages.error.fetchFailed', 'Fehler beim Laden der Daten'));
                }
                const data = await response.json(); // Предполагаем, что API возвращает { content: '...' }
                // Убедитесь, что ключ в ответе API правильный (content_de, content_en или просто content)
                setContent(data.content || data[`content_${lang}`] || '');
            } catch (err) {
                console.error("Error fetching privacy content:", err);
                setError(err instanceof Error ? err.message : t('legalPages.error.generic', 'Ein Fehler ist aufgetreten'));
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [i18n.language, t]); // Перезагружаем при смене языка

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h1" component="h1" gutterBottom>
                {t('legalPages.privacyTitle', 'Datenschutzerklärung')}
            </Typography>
            {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}><CircularProgress /></Box>}
            {error && <Alert severity="error">{error}</Alert>}
            {/* ВАЖНО: Используйте dangerouslySetInnerHTML только если вы АБСОЛЮТНО уверены,
          что контент из вашего API безопасен и прошел санитизацию на бэкенде! */}
            {!loading && !error && content && (
                <Box dangerouslySetInnerHTML={{ __html: content }} sx={{
                    // Добавьте стили для контента, если нужно (например, для заголовков, списков внутри HTML)
                    '& h2': { mt: 4, mb: 2, fontSize: '1.75rem' },
                    '& h3': { mt: 3, mb: 1, fontSize: '1.4rem' },
                    '& p': { mb: 2, lineHeight: 1.6 },
                    '& a': { color: 'primary.main' },
                }} />
            )}
            {!loading && !error && !content && <Typography>{t('legalPages.error.noContent', 'Inhalt nicht verfügbar.')}</Typography>}
        </Container>
    );
};

export default PrivacyPage;