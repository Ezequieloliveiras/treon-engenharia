import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import ImageLaudoPpci from '../image_section_four/laudo_técnico_ppci.jpg'

function cardPpci() {
    return (

        <Card className="cardsFour"
            sx={{
                maxWidth: 400,
                height: 580,
                boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)',
                position: 'relative'
            }}>
            <CardMedia
                sx={{
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center'
                }
                }
                title="Laudo Técnico de PPCI"
            >
                <img src={ImageLaudoPpci} alt="Descrição da Imagem"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }} />
            </CardMedia>
            <CardContent className="cardPpci">
                <Typography gutterBottom variant="h5" component="div">
                    Laudo Técnico de PPCI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Elaboramos laudos técnicos para sistema de prevenção e combate a incêndio e pânico conforme demanda do cliente.
                </Typography>
                <ul
                    style={{
                        paddingLeft: '25px',
                        paddingTop: '15px',
                        fontSize: '0.875rem',
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>
                    <li>Inspeção e laudo técnico para renovação de alvará</li>
                    <li>Laudo de integridade física</li>
                    <li>Laudo de conformidade e regularização no CBMES</li>
                </ul>
            </CardContent>
            <CardActions
                sx={{
                    position: 'absolute',
                    bottom: '1px', display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                <Button variant="contained"
                    href="/laudo_tecnico_ppci"
                    sx={{ width: '100%' }}>
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    )
}

export default cardPpci 