import React from 'react'
import image from '../logo/logo_treon_2.png'

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
    Button,
} from '@mui/material'

function Header() {

    return (
        <AppBar position="static" sx={{ backgroundColor: '#093170'}}>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center'}}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img style={{ width: '28%' }} src={image} alt="logo-treon" />

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: '#ffffff', display: 'block' }}
                            href="/">
                            Início
                        </Button>

                        <Button
                            sx={{ my: 2, color: '#ffffff', display: 'block' }}
                            href="/contact">
                            Contato
                        </Button>
                        <Button
                            sx={{ my: 2, color: '#ffffff', display: 'block' }}
                            href="/sobre">
                            Sobre
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
