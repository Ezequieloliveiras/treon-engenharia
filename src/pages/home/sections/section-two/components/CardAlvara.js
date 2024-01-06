import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import ImageAlvara from '../image_section_two/alvara_de_licenca.png'

function CardAlvara() {
    return (
        <Card className="cardsTwo"
            sx={{
                maxWidth: 400, height: 580,
                boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)',
                position: 'relative'
            }}>
            <CardMedia
                sx={{
                    height: 300, display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#e0e0e0',
                    padding: '5px 0px 30px'
                }}
                title="Alvará"
            >
                <img src={ImageAlvara} alt="Descrição da Imagem"
                    style={{
                        width: '250px',
                        height: '290px'
                    }} />
            </CardMedia>
            <CardContent className="cardAlvara">
                <Typography gutterBottom variant="h5" component="div">
                    Alvará de funcionamento CBMES
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Ajudamos empresas de todos os segmentos na regularização e liberação dos alvarás de funcionamento junto ao CBMES.
                </Typography>
                <ul
                    style={{
                        paddingLeft: '25px',
                        paddingTop: '15px',
                        fontSize: '0.875rem',
                        color:'rgba(0, 0, 0, 0.6)'
                    }}>
                    <li>
                        Consultoria de ALCB;
                    </li>
                    <li>
                        Renovação de ALCB;
                    </li>
                    <li>
                        Realização de testes e emissão de laudos técnicos.
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
                    href="/alvara_de_funcionamento"
                    sx={{ width: '100%' }}>
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardAlvara