import { styled } from "@mui/material"

import image from './carousel/image/laudo_técnico_ar_condicionado.jpg'
import imageSpda from './carousel/image/spda.jpg'

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'


const StyledSection = styled('section')(() => ({
    position: 'relative',
    padding: '200px 0px 100px 0px',
    background: '#eeeeee',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}))

const ContentSectionFour = () => {

    return (
        <>
            <StyledSection >
                <h1 style={{
                    position: 'absolute',
                    top: '70px', color: '#093170',
                    fontWeight: '700'
                }}>Laudos Técnicos</h1>
                <Card sx={{ maxWidth: 400, height: 580, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)', position: 'relative' }}>
                    <CardMedia
                        sx={{ height: 300, display: 'flex', justifyContent: 'center' }}
                        title="PMOC"
                    >
                        <img src={image} alt="Descrição da Imagem"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Laudo Técnico de Ar-condicionado
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Realizamos o seu projeto conforme sua necessidade (residencial, comercial e industrias).
                            <br /> <br />
                            Contamos com profissionais experientes para entregar o melhor custo beneficio, e também homologamos o seu projeto junto a EDP seguindo todos os procedimentos legais.                        </Typography>
                    </CardContent>
                    <CardActions sx={{ position: 'absolute', bottom: '0' }}>
                        <Button size="small">Saiba Mais</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 400, height: 580, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)', position: 'relative' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="https://c1.wallpaperflare.com/preview/965/479/726/solar-system-roof-power-generation-solar-power.jpg"
                        title="PMOC"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Energia Solar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Projetamos o seu sistema fotovoltaico conforme a sua demanda energética.
                            <ul style={{ paddingLeft: '25px', paddingTop: '15px' }}>
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
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ position: 'absolute', bottom: '0' }}>
                        <Button size="small">Saiba Mais</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 400, height: 580, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)', position: 'relative' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        title="PMOC"
                    >
                        <img src={imageSpda} alt="Descrição da Imagem"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Projetos de SPDA
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Projetamos o seu sistema de proteção contra descarga atmosférica de acordo com a sua edificação.
                            <ul style={{ paddingLeft: '25px', paddingTop: '15px' }}>
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
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ position: 'absolute', bottom: '0' }}>
                        <Button size="small">Saiba Mais</Button>
                    </CardActions>
                </Card>

            </StyledSection>

        </>
    )
}



export default ContentSectionFour