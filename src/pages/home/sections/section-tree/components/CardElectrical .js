import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import ImageProjetoEletrico from '../image_section_tree/projeto_eletrico.jpg'

function CardEletrical() {
    return (
        <Card className="cardsTree"
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
            title="Projeto Elétrico"
        >
            <img src={ImageProjetoEletrico} alt="Descrição da Imagem"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }} />
        </CardMedia>
        <CardContent className="cardEletrico">
            <Typography gutterBottom variant="h5" component="div">
                Projetos Elétricos
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Realizamos o seu projeto conforme sua necessidade (residencial, comercial e industrias).
                <br /> <br />
                Contamos com profissionais experientes para entregar o melhor custo beneficio, e também homologamos o seu projeto junto a EDP seguindo todos os procedimentos legais.                        </Typography>
        </CardContent>
        <CardActions
            sx={{
                position: 'absolute',
                bottom: '1px', display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}>
            <Button variant="contained"
                href="/projetos_eletricos"
                sx={{ width: '100%' }}>
                Saiba Mais
            </Button>
        </CardActions>
    </Card>
    )
}

export default CardEletrical