import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownward } from '@mui/icons-material';

const Hero = () => {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box
            id="hero"
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                pt: 8,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Stack spacing={3} alignItems="center" textAlign="center">
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            Hi, my name is
                        </Typography>

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 800,
                            }}
                        >
                            Siva Lokesh Yadav Golla
                        </Typography>

                        <Box sx={{ height: 80 }}>
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer',
                                    2000,
                                    'React.js Developer',
                                    2000,
                                    'Web Developer',
                                    2000,
                                    'UI/UX Enthusiast',
                                    2000,
                                ]}
                                wrapper="h2"
                                speed={50}
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: 600,
                                    color: 'inherit',
                                }}
                                repeat={Infinity}
                            />
                        </Box>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: '600px',
                                color: 'text.secondary',
                                fontSize: '1.125rem',
                                lineHeight: 1.8,
                            }}
                        >
                            Passionate about creating beautiful, responsive, and user-friendly web
                            applications using modern technologies like React, TypeScript, and Material-UI.
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={scrollToProjects}
                                sx={{
                                    px: 4,
                                    background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    },
                                }}
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                href="#contact"
                                sx={{
                                    px: 4,
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    '&:hover': {
                                        borderColor: 'primary.dark',
                                        background: 'rgba(129, 140, 248, 0.1)',
                                    },
                                }}
                            >
                                Get In Touch
                            </Button>
                        </Stack>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ position: 'absolute', bottom: 40 }}
                        >
                            <ArrowDownward sx={{ fontSize: 40, color: 'primary.main', opacity: 0.6 }} />
                        </motion.div>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Hero;
