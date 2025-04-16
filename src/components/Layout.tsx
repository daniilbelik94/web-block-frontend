// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
// Импорты для react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Стили для уведомлений

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Контейнер для уведомлений (позиция настраивается через props) */}
            <ToastContainer
                position="top-right" // Положение уведомлений
                autoClose={5000} // Время отображения (5 сек)
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" // Используем цветные уведомления (success/error)
            />
            <Header />
            <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;