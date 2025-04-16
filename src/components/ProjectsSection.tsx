// src/components/ProjectsSection.tsx
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard'; // Импорт карточки

// --- Вставьте массив projectsData сюда (или импортируйте, если вынесли) ---
const projectsData = [
    { id: 'project1', title_de: 'Projekt Alpha', title_en: 'Project Alpha', description_de: 'Beschreibung für Projekt Alpha...', description_en: 'Description for Project Alpha...', stack: ['React', 'Node.js', 'MUI'], url: '...', image: 'https://via.placeholder.com/600x400.png/CFD8DC/424242?text=Project+Alpha' },
    { id: 'project2', title_de: 'Projekt Beta', title_en: 'Project Beta', description_de: 'Entwicklung einer Landingpage...', description_en: 'Landing page development...', stack: ['HTML', 'CSS', 'JS', 'PHP'], url: '...', image: 'https://via.placeholder.com/600x400.png/B0BEC5/424242?text=Project+Beta' },
    { id: 'project3', title_de: 'Projekt Gamma', title_en: 'Project Gamma', description_de: 'Interne Webanwendung...', description_en: 'Internal web application...', stack: ['Laravel', 'Vue.js', 'MySQL'], url: '...', image: 'https://via.placeholder.com/600x400.png/ECEFF1/424242?text=Project+Gamma' },
];
// --- Конец массива ---


const ProjectsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        // Контейнер секции
        <Box id="projects" sx={{ py: { xs: 4, md: 8 }, backgroundColor: 'background.paper' }}> {/* Фон как у соц.сетей для чередования */}
            <Container maxWidth="lg"> {/* Ограничиваем ширину */}
                {/* Заголовок секции */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 4, md: 6 },
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        fontWeight: 'bold',
                    }}
                >
                    {t('projects.title', 'Мои Проекты')}
                </Typography>

                {/* Сетка для карточек проектов */}
                <Grid container spacing={4} justifyContent="center">
                    {projectsData.map((project) => (
                        // xs=12 (1 колонка), sm=6 (2 колонки), md=4 (3 колонки)
                        <Grid item xs={12} sm={6} md={4} key={project.id}>
                            {/* TODO: Добавить анимацию появления */}
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
                {/* Можно добавить кнопку "Загрузить еще" или пагинацию, если проектов много */}
            </Container>
        </Box>
    );
};

export default ProjectsSection;
// const projectsData = [
//     {
//         id: 'project1',
//         title_de: 'Projekt Alpha',
//         title_en: 'Project Alpha',
//         description_de: 'Beschreibung für Projekt Alpha. Fokus auf E-Commerce und Benutzerfreundlichkeit.',
//         description_en: 'Description for Project Alpha. Focused on e-commerce and user experience.',
//         stack: ['React', 'Node.js', 'MUI'],
//         url: 'https://example.com/project-alpha', // Ссылка на живой проект или демо
//         image: 'https://via.placeholder.com/600x400.png/CFD8DC/424242?text=Project+Alpha', // Заглушка изображения
//         // review_de: 'Toller Entwickler!', // Опционально
//         // review_en: 'Great developer!', // Опционально
//     },
//     {
//         id: 'project2',
//         title_de: 'Projekt Beta',
//         title_en: 'Project Beta',
//         description_de: 'Entwicklung einer Landingpage mit Fokus auf SEO und Performance für einen lokalen Dienstleister.',
//         description_en: 'Landing page development focusing on SEO and performance for a local service provider.',
//         stack: ['HTML', 'CSS', 'JS', 'PHP'],
//         url: 'https://example.com/project-beta',
//         image: 'https://via.placeholder.com/600x400.png/B0BEC5/424242?text=Project+Beta',
//     },
//     {
//         id: 'project3',
//         title_de: 'Projekt Gamma',
//         title_en: 'Project Gamma',
//         description_de: 'Interne Webanwendung zur Verwaltung von Kundenanfragen, gebaut mit Laravel.',
//         description_en: 'Internal web application for managing customer inquiries, built with Laravel.',
//         stack: ['Laravel', 'Vue.js', 'MySQL'],
//         url: 'https://example.com/project-gamma',
//         image: 'https://via.placeholder.com/600x400.png/ECEFF1/424242?text=Project+Gamma',
//     },
//     // Добавьте больше проектов по аналогии
// ];