import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

function CardSolar() {
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
                image="https://c1.wallpaperflare.com/preview/965/479/726/solar-system-roof-power-generation-solar-power.jpg"
                title="Energia Solar"
            />
            <CardContent className="cardSolar">
                <Typography gutterBottom variant="h5" component="div">
                    Energia Solar
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Projetamos o seu sistema fotovoltaico conforme a sua demanda energética.
                </Typography>
                <ul
                    style={{
                        paddingLeft: '25px',
                        paddingTop: '15px',
                        fontSize: '0.875rem',
                        color:'rgba(0, 0, 0, 0.6)'
                    }}>
                    <li>
                        Acompanhamento de execução
                    </li>
                    <li>
                        Testes + laudos técnicos
                    </li>
                    <li>
                        Projetos residenciais, comerciais e industriais
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
                    href="/projeto_energia_solar"
                    sx={{ width: '100%' }}>
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    )
}


export default CardSolar