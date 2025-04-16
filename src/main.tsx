// src/main.tsx
import React, { Suspense } from 'react'; // Добавим Suspense для i18n
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.ts';
import { BrowserRouter } from 'react-router-dom'; // <-- Импорт BrowserRouter

import './i18n.ts'; // Заглушка для импорта конфигурации i18n (создадим файл позже)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* Suspense нужен для асинхронной загрузки переводов i18next */}
        <Suspense fallback="Loading...">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter> {/* <-- Оборачиваем App */}
                    <App />
                </BrowserRouter> {/* <-- Закрываем BrowserRouter */}
            </ThemeProvider>
        </Suspense>
    </React.StrictMode>,
);