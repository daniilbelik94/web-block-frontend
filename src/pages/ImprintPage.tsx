// src/pages/ImprintPage.tsx
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, CircularProgress, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ImprintPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            setError(null);
            const lang = i18n.language.startsWith('de') ? 'de' : 'en';
            try {
                // ВАЖНО: Укажите правильный URL вашего API для страницы Impressum
                const response = await fetch(`/api/pages/impressum?lang=${lang}`); // <-- ИЗМЕНИТЕ URL API!
                if (!response.ok) {
                    throw new Error(t('legalPages.error.fetchFailed', 'Fehler beim Laden der Daten'));
                }
                const data = await response.json();
                setContent(data.content || data[`content_${lang}`] || '');
            } catch (err) {
                console.error("Error fetching imprint content:", err);
                setError(err instanceof Error ? err.message : t('legalPages.error.generic', 'Ein Fehler ist aufgetreten'));
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [i18n.language, t]);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h1" component="h1" gutterBottom>
                {t('legalPages.imprintTitle', 'Impressum')}
            </Typography>
            {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}><CircularProgress /></Box>}
            {error && <Alert severity="error">{error}</Alert>}
            {!loading && !error && content && (
                <Box dangerouslySetInnerHTML={{ __html: content }} sx={{ /* стили как в PrivacyPage */ }} />
            )}
            {!loading && !error && !content && <Typography>{t('legalPages.error.noContent', 'Inhalt nicht verfügbar.')}</Typography>}
        </Container>
    );
};

export default ImprintPage;