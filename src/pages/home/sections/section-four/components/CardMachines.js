import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import ImageLaudoMaquinas from '../image_section_four/maquinas_pesadas.png'


function CardMachines() {
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
                    height: 300
                }}
            >
                <img src={ImageLaudoMaquinas} alt="Descrição da Imagem"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }} />
            </CardMedia>
            <CardContent className="cardMaquinas">
                <Typography gutterBottom variant="h5" component="div">
                    Laudo Técnico de Máquinas Pesadas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Contamos com engenheiros especializados na área de laudos técnicos para máquinas e equipamentos.
                </Typography>
                <ul
                    style={{
                        paddingLeft: '25px',
                        paddingTop: '5px',
                        fontSize: '0.875rem',
                        color:'rgba(0, 0, 0, 0.6)'
                    }}>
                    <li>
                        inspeção e laudo técnico de máquinas e equipamentos (funcionalidades)
                    </li>
                    <li>
                        Laudo de integridade física
                    </li>
                    <li>
                        Laudo de regularização para NR11 e NR 12
                    </li>
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
                    href="/laudo_tecnico_maquinas_pesadas"
                    sx={{ width: '100%' }}>
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardMachines