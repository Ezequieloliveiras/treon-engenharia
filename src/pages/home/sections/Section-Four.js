import { styled } from "@mui/material"

import image from './carousel/image/laudo_técnico_ar_condicionado.jpg'
import imagePPCI from './carousel/image/laudo_técnico_ar_ppci.jpg'
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
    background: '#f5f5f5',
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
                            <p>Realizamos laudos técnicos para sistema de ar condicionado conforme necessidade do cliente.</p>
                            <ul>
                                <li>Laudo de integridade física</li>
                                <li>Laudo de instalações e conformidade</li>
                                <li>Laudo de manutenção em geral</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ position: 'absolute', bottom: '0' }}>
                        <Button size="small">Saiba Mais</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 400, height: 580, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)', position: 'relative' }}>
                    <CardMedia
                        sx={{ height: 300, display: 'flex', justifyContent: 'center' }}
                        title="PMOC"
                    >
                        <img src={imagePPCI} alt="Descrição da Imagem"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Laudo Técnico de PPCI
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>Elaboramos laudos técnicos para sistema de prevenção e combate a incêndio e pânico conforme demanda do cliente.</p>
                            <ul>
                                <li>Inspeção e laudo técnico para renovação de alvará</li>
                                <li>Laudo de integridade física</li>
                                <li>Laudo de conformidade e regularização no CBMES</li>
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