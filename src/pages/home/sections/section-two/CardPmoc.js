import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

function CardPmoc() {
    return (
        <Card className="cardsTwo"
            sx={{
                maxWidth: 400, height: 580,
                boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)',
                position: 'relative'
            }}>
            <CardMedia
                sx={{ width: 'auto', height: 300 }}
                image="https://img.freepik.com/fotos-premium/servico-tecnico-remover-o-filtro-de-ar-do-ar-condicionado-para-limpeza_35076-3617.jpg"
                title="PMOC"
            />
            <CardContent className="cardPmoc">
                <Typography gutterBottom variant="h5" component="div">
                    PMOC
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A Treon Engenharia é referência no setor de refrigeração e climatização, onde nossos engenheiros possuem expertise na elaboração do plano de manutenção, operação e controle (PMOC). Também realizamos a manutenção preventiva e corretiva de ar condicionados de todos modelos.
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
                    href="/pmoc"
                    sx={{ width: '100%' }}>
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardPmoc