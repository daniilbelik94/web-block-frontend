// src/components/SocialLinksSection.tsx
import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

// --- Иконки и массив socialLinks остаются такими же, как в предыдущем шаге ---
// Убедитесь, что заменили URL на свои!
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialLinks = [
    { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile-id', icon: <LinkedInIcon fontSize="large" />, ariaLabel: 'Visit LinkedIn Profile'},
    { id: 'email', name: 'Email', url: 'mailto:your.email@example.com', icon: <EmailIcon fontSize="large" />, ariaLabel: 'Send an Email'},
    { id: 'whatsapp', name: 'WhatsApp', url: 'https://wa.me/491701234567', icon: <WhatsAppIcon fontSize="large" />, ariaLabel: 'Contact via WhatsApp'},
    { id: 'telegram', name: 'Telegram', url: 'https://t.me/your_telegram_username', icon: <TelegramIcon fontSize="large" />, ariaLabel: 'Contact via Telegram'},
    { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/your_instagram_username', icon: <InstagramIcon fontSize="large" />, ariaLabel: 'Visit Instagram Profile'},
];
// --- Конец массива socialLinks ---


const SocialLinksSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{
            // 1. Увеличиваем вертикальные отступы секции
            py: { xs: 5, md: 8 },
            // 2. Меняем фон на стандартный 'paper' (обычно белый/очень светлый)
            backgroundColor: 'background.paper',
        }}>
            <Container maxWidth="md"> {/* Ограничиваем ширину */}
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        // 3. Увеличиваем отступ под заголовком
                        mb: 5,
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                        fontWeight: 'medium',
                    }}
                >
                    {t('social.title', 'Свяжитесь со мной')}
                </Typography>

                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                    // 4. Увеличиваем отступы между иконками
                    spacing={{ xs: 3, sm: 4, md: 15 }}
                >
                    {socialLinks.map((social) => (
                        <Tooltip title={social.name} key={social.id} arrow>
                            <IconButton
                                component="a"
                                href={social.url}
                                target={social.id === 'email' ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={social.ariaLabel}
                                sx={{
                                    // 5. Делаем цвет иконок по умолчанию темнее
                                    color: 'text.secondary', // Попробуйте 'text.primary', если нужно еще темнее
                                    // 6. Добавляем padding вокруг иконки, чтобы увеличить кликабельную область и визуальный размер
                                    p: 1.5,
                                    '&:hover': {
                                        color: 'primary.main', // Синий при наведении
                                        transform: 'scale(1.2)',
                                    },
                                    transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                                }}
                            >
                                {/* Иконка остается large, но padding выше сделает кнопку больше */}
                                {social.icon}
                            </IconButton>
                        </Tooltip>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default SocialLinksSection;