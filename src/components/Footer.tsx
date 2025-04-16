// src/components/Footer.tsx
import React from 'react';
// Добавляем нужные импорты
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Tooltip, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll'; // Импорт для скролла
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // Иконка "вверх"

// Иконки и массив socialLinks (ЗАМЕНИТЕ URL!)
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialLinks = [
    { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile-id', icon: <LinkedInIcon />, ariaLabel: 'Visit LinkedIn Profile'},
    { id: 'email', name: 'Email', url: 'mailto:your.email@example.com', icon: <EmailIcon />, ariaLabel: 'Send an Email'},
    { id: 'whatsapp', name: 'WhatsApp', url: 'https://wa.me/491701234567', icon: <WhatsAppIcon />, ariaLabel: 'Contact via WhatsApp'},
    { id: 'telegram', name: 'Telegram', url: 'https://t.me/your_telegram_username', icon: <TelegramIcon />, ariaLabel: 'Contact via Telegram'},
    { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/your_instagram_username', icon: <InstagramIcon />, ariaLabel: 'Visit Instagram Profile'},
];

// Навигационные элементы (копируем структуру из хедера)
const footerNavItems = [
    { labelKey: 'nav.home', path: '/', isScrollLink: false },
    { labelKey: 'nav.skills', path: 'skills', isScrollLink: true },
    { labelKey: 'nav.projects', path: 'projects', isScrollLink: true },
    { labelKey: 'nav.contact', path: 'contact', isScrollLink: true },
];

const Footer: React.FC = () => {
    const { t } = useTranslation();

    // Функция скролла наверх
    const handleScrollToTop = (e?: React.MouseEvent) => {
        // Если это клик по ссылке Home и мы уже на главной, предотвращаем переход
        if (e && window.location.pathname === '/') {
            e.preventDefault();
        }
        animateScroll.scrollToTop({ smooth: true, duration: 500 });
    };

    // Используем t() для получения переведенных имен ссылок
    const legalLinks = [
        { name: t('legalPages.privacyTitle'), path: '/datenschutz' }, // Исправлено
        { name: t('legalPages.imprintTitle'), path: '/impressum' },   // Исправлено
    ];

    return (
        <Box
            component="footer"
            sx={{ py: 4, mt: 'auto', backgroundColor: 'grey.700', color: 'common.white' }} // Увеличил немного py
        >
            <Container maxWidth="lg">
                {/* Делаем 4 колонки на md+ */}
                <Grid container spacing={{xs: 2, md: 3}} justifyContent="space-between">

                    {/* 1. Лого и копирайт (md={3}) */}
                    <Grid item xs={12} sm={4} md={3}>
                        <MuiLink component={RouterLink} to="/" underline="none" color="inherit"
                                 onClick={handleScrollToTop} sx={{ cursor: 'pointer' }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Web-Block
                            </Typography>
                        </MuiLink>
                        <Typography variant="body2" sx={{ color: 'grey.300' }}>
                            © {new Date().getFullYear()} Web-Block. {t('footer.rights')}
                        </Typography>
                        {/* Переносим кнопку Наверх сюда для мобильных */}
                        <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 2, textAlign: 'center' }}>
                            <Tooltip title={t('footer.scrollToTop', 'Наверх')} arrow>
                                <IconButton onClick={() => handleScrollToTop()} size="small" sx={{ color: 'grey.300', border: '1px solid grey.500', '&:hover': { color: 'common.white', bgcolor: 'rgba(255,255,255,0.1)' } }} aria-label={t('footer.scrollToTop', 'Наверх')}>
                                    <KeyboardArrowUpIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Grid>

                    {/* 2. Навигация (md={2}) */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>

                        </Typography>
                        {footerNavItems.map((item) => (
                            item.isScrollLink ? (
                                <MuiLink
                                    component={ScrollLink} // Используем ScrollLink
                                    key={item.labelKey}
                                    to={item.path} // ID секции
                                    smooth={true} duration={500} offset={-64} // Параметры скролла
                                    variant="body2" display="block" underline="hover"
                                    sx={{ color: 'grey.300', mb: 0.5, '&:hover': { color: 'common.white' }, cursor: 'pointer' }}
                                >
                                    {t(item.labelKey, item.labelKey.split('.')[1])}
                                </MuiLink>
                            ) : (
                                <MuiLink
                                    component={RouterLink} // Обычная ссылка для Home
                                    key={item.labelKey}
                                    to={item.path}
                                    onClick={() => handleScrollToTop()} // Скролл наверх для Home
                                    variant="body2"
                                    display="block"
                                    underline="hover"
                                    sx={{ color: 'grey.300',
                                        mb: 0.5,
                                        '&:hover':
                                            { color: 'common.white' } }}
                                >
                                    {t(item.labelKey, item.labelKey.split('.')[1])}
                                </MuiLink>
                            )
                        ))}
                    </Grid>

                    {/* 3. Юридические ссылки (md={2}) */}
                    <Grid item xs={6} sm={2} md={2}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>

                        </Typography>
                        {legalLinks.map((link) => (
                            <MuiLink component={RouterLink} to={link.path} key={link.name}  display={"block"}
                                     underline="hover"
                                     sx={{ color: 'grey.300',
                                         mb: 0.5,
                                         '&:hover':
                                             { color: 'common.white' } }}>
                                {link.name}
                            </MuiLink>
                        ))}
                    </Grid>

                    {/* 4. Социальные сети (md={3}) */}
                    <Grid item xs={12} sm={3} md={3} sx={{ textAlign: { xs: 'left', sm: 'right' }}}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
                            {t('footer.follow')}
                        </Typography>
                        <Stack direction="row" spacing={1} justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}>
                            {socialLinks.map((social) => (
                                <Tooltip title={social.name} key={social.id} arrow>
                                    <IconButton component="a" href={social.url} target={social.id === 'email' ? '_self' : '_blank'} rel="noopener noreferrer" aria-label={social.ariaLabel} sx={{ color: 'grey.300', '&:hover': { color: 'common.white', transform: 'scale(1.1)' }, transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out' }}>
                                        {social.icon}
                                    </IconButton>
                                </Tooltip>
                            ))}
                        </Stack>
                    </Grid>

                    {/* 5. Кнопка Наверх для десктопа (md={2}) */}
                    <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'flex' }, alignItems:'center', justifyContent:'flex-end' }}>
                        <Tooltip title={t('footer.scrollToTop', 'Наверх')} arrow>
                            <IconButton onClick={() => handleScrollToTop()} size="small" sx={{ color: 'grey.300', border: '1px solid grey.500', '&:hover': { color: 'common.white', bgcolor: 'rgba(255,255,255,0.1)' } }} aria-label={t('footer.scrollToTop', 'Наверх')}>
                                <KeyboardArrowUpIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;