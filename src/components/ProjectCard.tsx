// src/components/ProjectCard.tsx
import React, { ReactElement } from 'react'; // Добавил ReactElement
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Stack, Chip, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LaunchIcon from '@mui/icons-material/Launch';

// Описываем тип данных для одного проекта (оставляем как было)
interface Project {  }
interface ProjectCardProps { project: Project; }

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { t, i18n } = useTranslation();
    const title = i18n.language.startsWith('de') ? project.title_de : project.title_en;
    const description = i18n.language.startsWith('de') ? project.description_de : project.description_en;

    return (
        <Card sx={{ with: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
                component="img"
                height="200"
                width="250"
                image={project.image}
                alt={title}
                sx={{ objectFit: 'cover' }}
            />
            {/* Добавляем горизонтальный padding sx={{ px: 2 }} */}
            <CardContent sx={{ flexGrow: 1, px: 2, pt: 2 /* Добавим и верхний отступ */ }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'medium' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    mb: 2,
                    overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box',
                    WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
                }}>
                    {description}
                </Typography>
                {/* Оборачиваем стек в Box для контроля отступов, если нужно */}
                <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
                        {t('projects.stack', 'Технологии:')}
                    </Typography>
                    {/* Stack по умолчанию items-start, что нормально */}
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {project.stack.map((tech) => (
                            <Chip label={tech} key={tech} size="small" variant='outlined'/>
                        ))}
                    </Stack>
                </Box>
            </CardContent>
            {/* Добавляем горизонтальный и нижний padding sx={{ px: 2, pb: 2 }} */}
            <CardActions sx={{ justifyContent: 'flex-start', px: 2, pb: 2 }}>
                <Button
                    size="small" color="primary" variant="contained"
                    href={project.url} target="_blank" rel="noopener noreferrer"
                    endIcon={<LaunchIcon />}
                >
                    {t('projects.viewButton', 'Посмотреть')}
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;