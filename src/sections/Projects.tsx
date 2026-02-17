import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Market360',
            company: 'Thinklusive',
            description:
                'A comprehensive business intelligence and market research platform that enables users to analyze market trends, competitor data, and generate detailed reports. Features include interactive dashboards, data visualization, and advanced filtering capabilities.',
            image: '/project-market360.png',
            technologies: ['React', 'TypeScript', 'Ant Design', 'Redux', 'AG Grid', 'Vite'],
            github: '#',
            live: '#',
        },
        {
            title: 'CMCIntel',
            company: 'CMC Intel',
            description:
                'A sophisticated chemical intelligence and drug information management system for pharmaceutical research. Includes features for managing drug substances, manufacturing routes, regulatory documentation, and complex data imports from Excel files.',
            image: '/project-chembank.png',
            technologies: ['React', 'TypeScript', 'TailwindCSS', 'AG Grid', 'React Icons', 'XLSX'],
            github: '#',
            live: '#',
        },
    ];

    return (
        <Box id="projects" component="section" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 2,
                            textAlign: 'center',
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}
                    >
                        Featured Projects
                    </Typography>
                    <Box
                        sx={{
                            width: 80,
                            height: 4,
                            background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                            margin: '0 auto 6rem',
                            borderRadius: 2,
                        }}
                    />

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <Card
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                            background: (theme) =>
                                                theme.palette.mode === 'dark'
                                                    ? 'rgba(30, 41, 59, 0.5)'
                                                    : 'rgba(255, 255, 255, 0.9)',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            overflow: 'hidden',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: 12,
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="div"
                                            sx={{
                                                width: { xs: '100%', md: '40%' },
                                                minHeight: 300,
                                                background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '4rem',
                                                fontWeight: 700,
                                            }}
                                        >
                                            {project.title[0]}
                                        </CardMedia>
                                        <CardContent sx={{ flex: 1, p: 4 }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    color: 'primary.main',
                                                    fontWeight: 600,
                                                    letterSpacing: '0.1em',
                                                }}
                                            >
                                                {project.company}
                                            </Typography>
                                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                paragraph
                                                sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                                            >
                                                {project.description}
                                            </Typography>
                                            <Box sx={{ mb: 3 }}>
                                                <Stack direction="row" flexWrap="wrap" gap={1}>
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <Chip
                                                            key={techIndex}
                                                            label={tech}
                                                            size="small"
                                                            sx={{
                                                                background: (theme) =>
                                                                    theme.palette.mode === 'dark'
                                                                        ? 'rgba(129, 140, 248, 0.2)'
                                                                        : 'rgba(99, 102, 241, 0.1)',
                                                                color: 'text.primary',
                                                            }}
                                                        />
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Projects;
