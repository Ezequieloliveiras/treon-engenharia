import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

function CardPrevIncendio() {
    return (
        <Card className="cardsTwo"
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
            image="https://www.comefogo.com.br/uploads/pagina/elemento/campo/2020/06/NLeHvUYQwRdigdwP/projeto-de-prevencao-e-combate-a-incendio-qual-a-importancia-e-quem-deve-fazer_875x540.jpg"
            title="Projetos de preveção a incêndio"
        />
        <CardContent className="cardPrevencao">
            <Typography gutterBottom variant="h5" component="div">
                Projetos de preveção a incêndio
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Contamos com um time de projetistas experientes para regularizar sua empresa junto ao corpo de bombeiro. Elaboramos o projeto de prevenção e combate a incêndio (PPCI) conforme sua necessidade. Também te ajudamos na liberação do alvará de funcionamento.
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
                href="/prevencao_a_incendio"
                sx={{ width: '100%' }}>
                Saiba Mais
            </Button>
        </CardActions>
    </Card>
    )
}

export default CardPrevIncendio