// src/data/benefitsData.ts (Example - create a new file or place in SkillsSection)
import React from 'react';
// Option 1: Using react-icons (Install: npm install react-icons)
import { FaBrain, FaComments, FaPalette, FaRocket } from 'react-icons/fa'; // Example icons

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