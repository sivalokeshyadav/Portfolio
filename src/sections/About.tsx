import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Speed, Lightbulb } from '@mui/icons-material';

const About = () => {
    const highlights = [
        {
            icon: <Code sx={{ fontSize: 40 }} />,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable, and well-documented code',
        },
        {
            icon: <Speed sx={{ fontSize: 40 }} />,
            title: 'Performance',
            description: 'Optimizing applications for speed and efficiency',
        },
        {
            icon: <Lightbulb sx={{ fontSize: 40 }} />,
            title: 'Innovation',
            description: 'Always learning and implementing cutting-edge solutions',
        },
    ];

    return (
        <Box id="about" component="section" sx={{ py: 12 }}>
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
                        About Me
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

                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                                I'm a passionate Frontend Developer specializing in building exceptional digital
                                experiences. Currently working at <strong>Thinklusive</strong>,
                                where I've contributed to enterprise-level applications serving thousands of users.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                                With expertise in <strong>React.js</strong>, <strong>TypeScript</strong>, and modern UI frameworks,
                                I focus on creating responsive, accessible, and performant web applications.
                                My experience includes working with complex state management, data visualization,
                                and building scalable component architectures.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                                I'm always eager to learn new technologies and collaborate on challenging projects
                                that push the boundaries of web development.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mb: 4,
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Box
                                        component="img"
                                        src="/profile.jpeg"
                                        alt="Siva Lokesh Yadav Golla"
                                        sx={{
                                            width: { xs: 250, md: 350 },
                                            height: { xs: 250, md: 350 },
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '4px solid',
                                            borderColor: 'primary.main',
                                            boxShadow: 8,
                                        }}
                                    />
                                </motion.div>
                            </Box>
                            <Grid container spacing={2}>
                                {highlights.map((item, index) => (
                                    <Grid size={12} key={index}>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <Paper
                                                sx={{
                                                    p: 3,
                                                    display: 'flex',
                                                    gap: 2,
                                                    background: (theme) =>
                                                        theme.palette.mode === 'dark'
                                                            ? 'rgba(30, 41, 59, 0.5)'
                                                            : 'rgba(248, 250, 252, 0.5)',
                                                    border: '1px solid',
                                                    borderColor: 'divider',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: 6,
                                                    },
                                                }}
                                            >
                                                <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                                                <Box>
                                                    <Typography variant="h6" gutterBottom>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                            </Paper>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;
