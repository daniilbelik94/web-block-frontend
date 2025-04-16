// src/components/HeroSection.tsx
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {scroller} from "react-scroll";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    const scrollToContact = () => {
        scroller.scrollTo('contact', { // 'contact' - это ID секции
            smooth: true,       // Включить плавный скролл
            duration: 500,      // Длительность анимации (в мс)
            offset: -64,        // Смещение (отрицательное, на высоту хедера)
            // delay: 0,        // Задержка перед началом
        });
    };

    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 64px)',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(45deg, #CFD8DC 30%, #546E7A 90%)',
                py: { xs: 6, md: 10 },
            }}
        >
            {/* Убираем maxWidth="md", чтобы контейнер мог быть шире */}
            {/* Можно поставить maxWidth="lg" (1200px) или "xl" (1536px), если все же нужно ограничение */}
            {/* Но для начала уберем совсем, чтобы использовать доступную ширину */}
            <Container> {/* <-- Убрали maxWidth="md" */}
                <Stack
                    spacing={{ xs: 2, sm: 3 }}
                    // Центрируем текст и элементы внутри Stack
                    // На вашем скриншоте текст выглядит выровненным влево, хотя код задает 'center'.
                    // Убедитесь, что у вас точно textAlign: 'center' или поменяйте на 'left' для md+, если нужно.
                    sx={{
                        textAlign: { xs: 'center', md: 'center' }, // Оставляем центр для всех экранов пока
                        alignItems: 'center', // Центрируем кнопку и т.д. внутри Stack
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 'bold',
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                        }}
                    >
                        {t('hero.title', 'Веб-решения, которые выделяют ваш бизнес')}
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                            // Ограничим ширину самого текста, чтобы он не был слишком длинным на широких экранах
                            maxWidth: { md: '800px' }, // Макс ширина для подзаголовка на средних экранах и выше
                        }}
                    >
                        {t('hero.subtitle', 'Современные сайты с душой и функционалом')}
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={scrollToContact}
                        sx={{
                            mt: 2,
                            py: 1.5,
                            px: 4,
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                        }}
                    >
                        {t('hero.ctaButton', 'Заказать проект')}
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default HeroSection;