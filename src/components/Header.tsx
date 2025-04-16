// src/components/Header.tsx
import React, { useState } from 'react'; // Импортировали useState
// Добавляем Drawer, List, ListItem, ListItemButton, ListItemText, Divider, IconButton, MenuIcon
import { AppBar, Toolbar, Typography, Container, Box, Button, Link as MuiLink, Stack, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Импортировали иконку бургера
import LanguageSwitcher from './LanguageSwitcher';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';

// Ширина бокового меню
const drawerWidth = 240;

// Массив навигации (оставляем как есть)
const navItems = [
    { labelKey: 'nav.home', path: '/', isScrollLink: false },
    { labelKey: 'nav.skills', path: 'skills', isScrollLink: true },
    { labelKey: 'nav.projects', path: 'projects', isScrollLink: true },
    { labelKey: 'nav.contact', path: 'contact', isScrollLink: true },
];

const Header: React.FC = () => {
    const { t } = useTranslation();
    // Состояние для открытия/закрытия мобильного меню
    const [mobileOpen, setMobileOpen] = useState(false);

    // Обработчик открытия/закрытия меню
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // Обработчик для скролла наверх + закрытие меню
    const handleHomeClick = (e?: React.MouseEvent) => {
        if (e && window.location.pathname === '/') {
            e.preventDefault();
        }
        animateScroll.scrollToTop({ smooth: true, duration: 500 });
        setMobileOpen(false); // Закрываем меню при клике
    };

    // Контент для мобильного меню (Drawer)
    const drawerContent = (
        // Закрываем меню при клике на сам Box (на пустое место)
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Web-Block {/* Или другое название меню */}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.labelKey} disablePadding>
                        {item.isScrollLink ? (
                            // Ссылка для скролла в меню
                            <ListItemButton
                                component={ScrollLink}
                                to={item.path} smooth duration={500} offset={-64}
                                onClick={() => setMobileOpen(false)} // Закрываем меню
                                sx={{ textAlign: 'center' }}
                            >
                                <ListItemText primary={t(item.labelKey, item.labelKey.split('.')[1])} />
                            </ListItemButton>
                        ) : (
                            // Ссылка Home в меню
                            <ListItemButton
                                component={RouterLink}
                                to={item.path}
                                onClick={() => handleHomeClick()} // Используем общий обработчик
                                sx={{ textAlign: 'center' }}
                            >
                                <ListItemText primary={t(item.labelKey, item.labelKey.split('.')[1])} />
                            </ListItemButton>
                        )}
                    </ListItem>
                ))}
            </List>
            <Divider />
            {/* Переключатель языка внутри меню */}
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <LanguageSwitcher />
            </Box>
        </Box>
    );


    return (
        // Оборачиваем в React.Fragment т.к. возвращаем AppBar и Drawer рядом
        <>
            <AppBar
                component="nav" // Добавляем семантический тег
                position="static"
                elevation={1}
                sx={{ backgroundColor: 'background.paper' }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>

                        {/* 1. Логотип - ссылка + скролл */}
                        <MuiLink
                            component={RouterLink}
                            to="/"
                            underline="none"
                            color="inherit"
                            sx={{ display: 'inline-block', cursor: 'pointer' }}
                            onClick={() => handleHomeClick()} // Обновляем onClick
                        >
                            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                                Web-Block
                            </Typography>
                        </MuiLink>

                        {/* Spacer отодвигает навигацию/иконки вправо */}
                        <Box sx={{ flexGrow: 1 }} />

                        {/* 2. Навигация для десктопа (скрыта на xs) */}
                        <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            {navItems.map((item) => (
                                item.isScrollLink ? (
                                    <Button component={ScrollLink} key={item.labelKey} /* ... пропсы ScrollLink ... */ to={item.path} spy={true} smooth={true} duration={500} offset={-70} sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'action.hover' } }}>
                                        {t(item.labelKey, item.labelKey.split('.')[1])}
                                    </Button>
                                ) : (
                                    <Button component={RouterLink} key={item.labelKey} to={item.path} onClick={handleHomeClick} sx={{ color: 'text.primary', '&:hover': { backgroundColor: 'action.hover' } }}>
                                        {t(item.labelKey, item.labelKey.split('.')[1])}
                                    </Button>
                                )
                            ))}
                        </Stack>

                        {/* Переключатель языка для десктопа (скрыт на xs) */}
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 2 }}> {/* Добавлен отступ ml */}
                            <LanguageSwitcher />
                        </Box>

                        {/* Кнопка Бургер-меню для мобильных (только на xs) */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end" // Размещаем у правого края
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, ml: 1, color: 'text.primary' }} // Показываем только на xs
                        >
                            <MenuIcon />
                        </IconButton>

                    </Toolbar>
                </Container>
            </AppBar>

            {/* Навигационный Drawer (боковое меню) */}
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle} // Закрытие по клику вне меню
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' }, // Показываем только на xs
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawerContent} {/* Вставляем контент меню */}
                </Drawer>
            </Box>
        </> // Закрываем React.Fragment
    );
};

export default Header;