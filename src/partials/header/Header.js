import React from 'react'
import LogoTreon from '../logo/logo_treon_3.png'
import CreaLogo from '../logo/crea_logo.png'
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
                    <div
                        style={{
                            width: '300px',
                            height: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <div style={{ marginRight: '100px' }}>
                            <img
                                style={{
                                    width: '163%',
                                    height: '50%',
                                }}
                                src={LogoTreon} alt="logo-treon" />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyItems: 'center',
                                marginRight: '40px'
                            }}>
                            <img
                                style={{
                                    width: '45%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyItems: 'center'
                                }}
                                src={CreaLogo} alt="logo-crea" />
                            <p
                                style={{
                                    width: '60px',
                                    textAlign: 'center',
                                    fontSize: '10px',
                                    margin: '5px 0px 0px 0px'
                                }}>
                                CREA-ES
                            </p>
                        </div>
                    </div>
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
