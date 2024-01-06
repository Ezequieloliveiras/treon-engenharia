import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import '../section_four.css'

import ImageLaudoAr from '../image_section_four/laudo_técnico_ar_condicionado.jpg'

function CardAr() {
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
                }}
                title="PMOC"
            >
                <img src={ImageLaudoAr} alt="Descrição da Imagem"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }} />
            </CardMedia>
            <CardContent className="cardAr">
                <Typography gutterBottom variant="h5" component="div">
                    Laudo Técnico de Ar-condicionado
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>Realizamos laudos técnicos para sistema de ar condicionado conforme necessidade do cliente.</p>
                    <ul>
                        <li>Laudo de integridade física</li>
                        <li>Laudo de instalações e conformidade</li>
                        <li>Laudo de manutenção em geral</li>
                    </ul>
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    position: 'absolute',
                    bottom: '1px', display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                <Button variant="contained"
                    href="/laudo_tecnico_ar_condicionado"
                    sx={{ width: '100%' }}>
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardAr