import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                borderTop: '1px solid',
                borderColor: 'divider',
                mt: 8,
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3} alignItems="center">
                    <Stack direction="row" spacing={2}>
                        <IconButton
                            href="https://github.com/sivalokeshyadav"
                            target="_blank"
                            sx={{
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main',
                                    transform: 'translateY(-3px)',
                                },
                            }}
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/siva-lokesh-yadav-golla-3277791a5/"
                            target="_blank"
                            sx={{
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main',
                                    transform: 'translateY(-3px)',
                                },
                            }}
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            href="mailto:222sivalokeshyadav@gmail.com"
                            sx={{
                                color: 'text.primary',
                                '&:hover': {
                                    color: 'primary.main',
                                    transform: 'translateY(-3px)',
                                },
                            }}
                        >
                            <Email />
                        </IconButton>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Siva Lokesh Yadav Golla. All rights reserved.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
