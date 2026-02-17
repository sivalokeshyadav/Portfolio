import { Box, Container, Typography, Grid, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
        },
        {
            title: 'UI Frameworks',
            skills: ['Material-UI', 'Ant Design', 'TailwindCSS', 'Styled Components'],
        },
        {
            title: 'State Management',
            skills: ['Redux', 'Redux Toolkit', 'Context API', 'React Query'],
        },
        {
            title: 'Data & Visualization',
            skills: ['AG Grid', 'Chart.js', 'React Grid Layout', 'XLSX'],
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'Docker', 'npm', 'Webpack', 'ESLint', 'Prettier'],
        },
        {
            title: 'Backend (Familiar)',
            skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'MySQL', 'Golang'],
        },
    ];

    return (
        <Box
            id="skills"
            component="section"
            sx={{
                py: 12,
                background: (theme) =>
                    theme.palette.mode === 'dark'
                        ? 'rgba(30, 41, 59, 0.3)'
                        : 'rgba(241, 245, 249, 0.5)',
            }}
        >
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
                        Skills & Technologies
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

                    <Grid container spacing={3}>
                        {skillCategories.map((category, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Paper
                                        sx={{
                                            p: 3,
                                            height: '100%',
                                            background: (theme) =>
                                                theme.palette.mode === 'dark'
                                                    ? 'rgba(15, 23, 42, 0.5)'
                                                    : 'rgba(255, 255, 255, 0.8)',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            '&:hover': {
                                                boxShadow: 8,
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            gutterBottom
                                            sx={{
                                                fontWeight: 600,
                                                color: 'primary.main',
                                                mb: 2,
                                            }}
                                        >
                                            {category.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {category.skills.map((skill, skillIndex) => (
                                                <Chip
                                                    key={skillIndex}
                                                    label={skill}
                                                    sx={{
                                                        fontWeight: 500,
                                                        background: (theme) =>
                                                            theme.palette.mode === 'dark'
                                                                ? 'rgba(129, 140, 248, 0.2)'
                                                                : 'rgba(99, 102, 241, 0.1)',
                                                        color: 'text.primary',
                                                        '&:hover': {
                                                            background: (theme) =>
                                                                theme.palette.mode === 'dark'
                                                                    ? 'rgba(129, 140, 248, 0.3)'
                                                                    : 'rgba(99, 102, 241, 0.2)',
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Skills;
