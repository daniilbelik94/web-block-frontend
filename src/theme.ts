import { createTheme } from '@mui/material/styles';

// Создаем нашу кастомную тему
const theme = createTheme({
    // Палитра цветов
    palette: {
        primary: {
            main: '#1976D2', // Глубокий синий (акценты)
        },
        secondary: { // Можем определить вторичный цвет, если понадобится
            main: '#B0BEC5', // Светло-серый (для иконок, второстепенного текста)
        },
        background: {
            default: '#ECEFF1', // Светло-серый основной фон страниц/компонентов
            paper: '#FFFFFF',   // Фон для "бумажных" элементов типа Card, AppBar и т.д. (можно сделать чуть темнее, например #FAFAFA, если нужно)
        },
        text: {
            primary: '#424242', // Угольный (основной текст)
            secondary: '#757575', // Более светлый серый для вторичного текста
        },
        success: {
            main: '#4CAF50', // Мягкий зеленый (уведомления)
        },
        grey: { // Добавим разные оттенки серого для удобства
            100: '#ECEFF1',
            200: '#CFD8DC',
            300: '#B0BEC5',
            700: '#424242',
        }
    },

    // Типографика (шрифты)
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Базовый шрифт
        h1: {
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: 700, // Bold
            fontSize: '3rem', // 48px (Desktop) - для мобильных будем адаптировать позже
            letterSpacing: '0.5px',
        },
        h2: {
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: 700, // Bold
            fontSize: '2rem', // 32px (Desktop)
            letterSpacing: '0.5px',
        },
        // ... можно определить h3, h4, h5, h6 по аналогии
        body1: { // Основной текст параграфов
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: '1rem', // 16px
        },
        button: { // Стиль текста для кнопок
            fontFamily: 'Montserrat, Arial, sans-serif', // Кнопки тоже сделаем Montserrat для акцента
            fontWeight: 500, // Medium
        }
    },

    // Переопределение стилей компонентов по умолчанию
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12, // Закругление углов для карточек
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Небольшая тень (можно настроить elevation)
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8, // Закругление углов для кнопок
                    textTransform: 'none', // Отключаем автоматический КАПС в кнопках
                },
                containedPrimary: { // Стили для основной синей кнопки
                    '&:hover': {
                        backgroundColor: '#1565C0', // Чуть темнее синий при наведении
                        transform: 'scale(1.03)', // Небольшое увеличение
                        boxShadow: '0 6px 14px rgba(0,0,0,0.15)', // Усиление тени
                    },
                    transition: 'all 0.3s ease', // Плавный переход
                }
            },
        },
    },
});

export default theme; // Экспортируем тему для использования в приложении