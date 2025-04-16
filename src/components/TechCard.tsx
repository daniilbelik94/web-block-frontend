// src/components/BenefitCard.tsx (Renamed from TechCard)
import React, { ReactElement } from 'react';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';

interface BenefitCardProps {
    title: string;
    icon: ReactElement; // Accepts the icon element directly
    description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, icon, description }) => {
    return (
        <Card
            sx={{
                maxWidth: '520px',
                maxHeight: '250px',
                // Crucial for consistent height in the grid
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                p: 3, // Increased padding for better spacing
                // Add a subtle hover effect (optional)
                transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: 6, // Or theme.shadows[6]
                    transform: 'translateY(-4px)',
                },
            }}
            // variant="outlined" // Alternative look: border instead of shadow
        >
            {/* Use Box for the icon for potentially more styling control */}
            <Box sx={{ mb: 2 }}> {/* Margin below icon */}
                {/* Clone icon to potentially inherit color or apply specific styles if needed */}
                {React.cloneElement(icon, { style: { ...icon.props.style, fontSize: '2.5rem' } })}
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 0 }}> {/* Remove default padding, flexGrow keeps content pushed down */}
                <Stack spacing={1.5} alignItems="center"> {/* Adjust spacing */}
                    {/* Title */}
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}> {/* Bold title */}
                        {title}
                    </Typography>

                    {/* Description */}
                    <Typography variant="body1" color="text.secondary"> {/* Slightly larger body text */}
                        {description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default BenefitCard;