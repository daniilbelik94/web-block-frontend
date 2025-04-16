// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import PrivacyPage from './pages/PrivacyPage'; // <-- Импорт
import ImprintPage from './pages/ImprintPage'; // <-- Импорт

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/datenschutz" element={<PrivacyPage />} /> {/* <-- Новый маршрут */}
                <Route path="/impressum" element={<ImprintPage />} /> {/* <-- Новый маршрут */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Layout>
    );
}

export default App;