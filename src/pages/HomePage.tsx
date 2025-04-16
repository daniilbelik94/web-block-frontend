// src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import SocialLinksSection from '../components/SocialLinksSection';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection'; // <-- Импорт
// ...

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <SkillsSection />
            <SocialLinksSection />
            <ContactSection />
            <ProjectsSection /> {/* <-- Добавляем секцию */}
            {/* ... */}
        </>
    );
};

export default HomePage;