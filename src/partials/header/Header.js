import React from 'react'
import LogoTreon from '../logo/logo_treon_3.png'

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
        <AppBar position="static" sx={{
            backgroundColor: '#093170',
            boxShadow: '2px 1px 10px #000000',

        }}>
            <Container maxWidth="xl" sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
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
                        <img style={{ width: '35%' }} src={LogoTreon} alt="logo-treon" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{
                                my: 2, color: '#ffffff',
                                display: 'block',
                                fontFamily: 'Manrope',
                                textTransform: 'none',
                                fontSize: '15px'
                            }}
                            href="/">
                            Início
                        </Button>
                        <Button
                            sx={{
                                my: 2, color: '#ffffff',
                                display: 'block',
                                fontFamily: 'Manrope',
                                textTransform: 'none',
                                fontSize: '15px'
                            }}
                            href="/contact">
                            Contato
                        </Button>
                        <Button
                            sx={{
                                my: 2, color: '#ffffff',
                                display: 'block', fontFamily: 'Manrope',
                                textTransform: 'none',
                                fontSize: '15px'
                            }}
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
