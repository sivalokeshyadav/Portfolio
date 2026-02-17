import { AppBar, Toolbar, Box, IconButton, Button, Container, useScrollTrigger } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';

interface NavigationProps {
    mode: 'light' | 'dark';
    toggleTheme: () => void;
}

const Navigation = ({ mode, toggleTheme }: NavigationProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const navItems = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Resume', href: '#resume' },
        { label: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: trigger
                    ? mode === 'dark'
                        ? 'rgba(15, 23, 42, 0.9)'
                        : 'rgba(248, 250, 252, 0.9)'
                    : 'transparent',
                backdropFilter: trigger ? 'blur(10px)' : 'none',
                boxShadow: trigger ? 3 : 0,
                transition: 'all 0.3s ease',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                    <Box
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            cursor: 'pointer',
                        }}
                        onClick={() => scrollToSection('#hero')}
                    >
                        SL
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    '&:hover': {
                                        background: mode === 'dark'
                                            ? 'rgba(129, 140, 248, 0.1)'
                                            : 'rgba(99, 102, 241, 0.1)',
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <IconButton onClick={toggleTheme} color="inherit">
                            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                    </Box>

                    {/* Mobile Navigation */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <IconButton onClick={toggleTheme} color="inherit">
                            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;
