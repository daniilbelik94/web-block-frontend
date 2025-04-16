// src/components/SkillsSection.tsx
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';


import { FaBrain, FaComments, FaPalette, FaRocket } from 'react-icons/fa';
import BenefitCard from "./TechCard.tsx"; // Example icons

// Option 2: Using Custom SVG Components (Recommended for unique/animated style)
// import ExpertiseIcon from '../assets/icons/expertise.svg'; // Assuming you have SVGs
// import CommunicationIcon from '../assets/icons/communication.svg';
// import ArtIcon from '../assets/icons/art.svg';
// import SpeedIcon from '../assets/icons/speed.svg';

// Define the structure for benefits
export interface Benefit {
    id: string;
    titleKey: string; // Translation key for the title (e.g., "EXPERTISE")
    descriptionKey: string; // Translation key for the description
    icon: React.ReactElement; // The icon element
}

// Define the actual benefits data
// eslint-disable-next-line react-refresh/only-export-components
export const benefitsData: Benefit[] = [
    {
        id: 'expertise',
        titleKey: 'skills.expertiseTitle',
        descriptionKey: 'skills.expertiseDesc',
        // Example using react-icons - choose icons that fit the theme!
        icon: <FaBrain size={40} color="var(--mui-palette-primary-main)" />,
        // Example using custom SVG component (if you set up SVGR)
        // icon: <ExpertiseIcon style={{ width: 40, height: 40, color: 'var(--mui-palette-primary-main)' }} />,
    },
    {
        id: 'communication',
        titleKey: 'skills.communicationTitle',
        descriptionKey: 'skills.communicationDesc',
        icon: <FaComments size={40} color="var(--mui-palette-primary-main)" />,
    },
    {
        id: 'design', // Combining 'Art' and UX/UI/SEO focus
        titleKey: 'skills.designTitle',
        descriptionKey: 'skills.designDesc',
        icon: <FaPalette size={40} color="var(--mui-palette-primary-main)" />,
    },
    {
        id: 'efficiency', // Combining 'Urgent Execution' and incorporating tech
        titleKey: 'skills.efficiencyTitle',
        descriptionKey: 'skills.efficiencyDesc',
        icon: <FaRocket size={40} color="var(--mui-palette-primary-main)" />,
    },
];

const SkillsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box id="skills" sx={{ py: { xs: 5, md: 10 }, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 5, md: 8 },
                        fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
                        fontWeight: 'bold',
                    }}
                >
                    {t('skills.title', 'Why Work With Me?')}
                </Typography>

                <Grid
                    container
                    spacing={{ xs: 3, md: 4 }} // Проверьте отступы, возможно нужно будет настроить
                    justifyContent="center"
                    alignItems="stretch" // Добавлено для выравнивания высоты
                >
                    {benefitsData.map((benefit) => (
                        // Вот здесь настраиваем колонки для разных размеров экрана
                        <Grid item xs={12} sm={6} md={6} lg={3} key={benefit.id}>
                            <BenefitCard
                                title={t(benefit.titleKey, benefit.id)}
                                description={t(benefit.descriptionKey, '...')}
                                icon={benefit.icon}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SkillsSection;