import { Box, Container, Typography, Button, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Download, Visibility } from '@mui/icons-material';

const Resume = () => {
    const experience = [
        {
            role: 'Frontend Developer',
            company: 'Thinklusive',
            description: 'Working on Market360 - Business intelligence platform and CMCIntel - Chemical intelligence system',
        },
    ];

    return (
        <Box
            id="resume"
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
                        Resume
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

                    <Paper
                        sx={{
                            p: 6,
                            textAlign: 'center',
                            background: (theme) =>
                                theme.palette.mode === 'dark'
                                    ? 'rgba(15, 23, 42, 0.5)'
                                    : 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            Download My Resume
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mb: 4 }}
                        >
                            Get a comprehensive overview of my professional experience, skills, and education.
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<Download />}
                                href="/SIVALOKESH YADAV GOLLA.pdf"
                                download
                                sx={{
                                    px: 4,
                                    background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    },
                                }}
                            >
                                Download PDF
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<Visibility />}
                                href="/SIVALOKESH YADAV GOLLA.pdf"
                                target="_blank"
                                sx={{
                                    px: 4,
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                }}
                            >
                                View Resume
                            </Button>
                        </Stack>

                        {/* Experience Highlights */}
                        <Box sx={{ mt: 6 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                                Experience
                            </Typography>
                            <Stack spacing={3}>
                                {experience.map((exp, index) => (
                                    <Box key={index}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            {exp.role} @ {exp.company}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {exp.description}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Resume;
