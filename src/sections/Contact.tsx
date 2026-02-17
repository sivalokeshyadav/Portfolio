import { Box, Container, Typography, Paper, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub, Phone } from '@mui/icons-material';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Email sx={{ fontSize: 30 }} />,
            label: 'Email',
            value: '222sivalokeshyadav@gmail.com',
            href: 'mailto:222sivalokeshyadav@gmail.com',
        },
        {
            icon: <LinkedIn sx={{ fontSize: 30 }} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/siva-lokesh-yadav-golla',
            href: 'https://www.linkedin.com/in/siva-lokesh-yadav-golla-3277791a5/',
        },
        {
            icon: <GitHub sx={{ fontSize: 30 }} />,
            label: 'GitHub',
            value: 'github.com/sivalokeshyadav',
            href: 'https://github.com/sivalokeshyadav',
        },
        {
            icon: <Phone sx={{ fontSize: 30 }} />,
            label: 'Phone',
            value: '+91 8374586210',
            href: 'tel:+918374586210',
        },
    ];

    return (
        <Box id="contact" component="section" sx={{ py: 12 }}>
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
                        Get In Touch
                    </Typography>
                    <Box
                        sx={{
                            width: 80,
                            height: 4,
                            background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                            margin: '0 auto 3rem',
                            borderRadius: 2,
                        }}
                    />

                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            mb: 6,
                            fontSize: '1.125rem',
                        }}
                    >
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part
                        of your visions. Feel free to reach out!
                    </Typography>

                    <Stack spacing={3} maxWidth={700} mx="auto">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Paper
                                    sx={{
                                        p: 3,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 3,
                                        background: (theme) =>
                                            theme.palette.mode === 'dark'
                                                ? 'rgba(30, 41, 59, 0.5)'
                                                : 'rgba(255, 255, 255, 0.9)',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        '&:hover': {
                                            transform: 'translateX(8px)',
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: 'primary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                                            {item.label}
                                        </Typography>
                                        <Link
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: 'block',
                                                color: 'text.primary',
                                                textDecoration: 'none',
                                                fontWeight: 500,
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            {item.value}
                                        </Link>
                                    </Box>
                                </Paper>
                            </motion.div>
                        ))}
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Contact;
