// src/components/ContactSection.tsx
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm'; // Импортируем компонент формы

const ContactSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box id="contact" sx={{ py: { xs: 5, md: 8 }, backgroundColor: 'background.default' }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h4"
                                component="p"
                                sx={{
                                    fontStyle: 'regular', // Исправлено 'regular' на 'italic'
                                    color: 'text.secondary',
                                    textAlign: { xs: 'center', md: 'center' }, // Оставляем выравнивание
                                    maxWidth: 500, // Ограничение ширины цитаты
                                    mx: {xs: 'auto', md: 'auto'}, // Центрируем цитату на xs
                                    mb: { xs: 4, md: 0 },
                                    borderLeft: { md: `4px solid ${'primary.main'}` },
                                    pl: { md: 3 },
                                    // mt: { md: 6 } // Убрали пока mt, т.к. alignItems="center" у Grid container
                                }}
                            >
                                "{t('contact.quote', 'Ваш успех начинается с качественного сайта')}"
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            {/* Заголовок формы */}
                            <Typography
                                variant="h5"
                                component="h2"
                                sx={{
                                    mb: 3,

                                    fontWeight: 'medium',
                                    // Чтобы заголовок был выровнен с формой (которая центрируется на sm+):
                                    width: { xs: '300px', sm: '520px' }, // Используем ту же логику ширины
                                    mx: { xs:'0', sm: '0' },        // И то же центрирование
                                    textAlign: { xs: 'center', sm: 'center' } // Центрируем текст на sm+
                                }}
                            >
                                {t('contactForm.title', 'Напишите мне')}
                            </Typography>
                            {/* Форма */}
                            <ContactForm />
                        </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactSection;