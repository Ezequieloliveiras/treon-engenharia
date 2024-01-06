import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import imageSpda from '../image_section_tree/spda.jpg'

function CardSpda() {
    return (
        <Card className="cardsTree"
            sx={{
                maxWidth: 400,
                height: 580,
                boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)',
                position: 'relative'
            }}>
            <CardMedia
                sx={{ height: 300 }}
                title="SPDA"
            >
                <img src={imageSpda} alt="Descrição da Imagem"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }} />
            </CardMedia>
            <CardContent className="cardSpda">
                <Typography gutterBottom variant="h5" component="div">
                    Projetos de SPDA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Projetamos o seu sistema de proteção contra descarga atmosférica de acordo com a sua edificação.
                </Typography>
                <ul
                    style={{
                        paddingLeft: '25px',
                        paddingTop: '15px',
                        fontSize: '0.875rem',
                        color:'rgba(0, 0, 0, 0.6)'
                    }}>
                    <li>
                        Laudo de integridade fisíca
                    </li>
                    <li>
                        Testes de funcionamento
                    </li>
                    <li>
                        Laudo de conformidade
                    </li>
                </ul>
            </CardContent>
            <CardActions sx={{
                position: 'absolute',
                bottom: '1px', display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}>
                <Button variant="contained"
                    href="/projeto_spda"
                    sx={{ width: '100%' }}>
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardSpda