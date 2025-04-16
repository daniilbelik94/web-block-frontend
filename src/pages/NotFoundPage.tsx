// src/pages/NotFoundPage.tsx
import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- Импортируем хук

const NotFoundPage: React.FC = () => {
    const { t } = useTranslation(); // <-- Используем хук

    return (
        <Container sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h3" component="h1" gutterBottom>
                {t('notFoundTitle')} {/* <-- Перевод */}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {t('notFoundText')} {/* <-- Перевод */}
            </Typography>
            <Button component={RouterLink} to="/" variant="contained" color="primary">
                {t('goToHomepage')} {/* <-- Перевод */}
            </Button>
        </Container>
    );
};

export default NotFoundPage;