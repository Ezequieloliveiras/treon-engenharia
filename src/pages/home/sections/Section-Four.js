import { styled } from "@mui/material"

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import './section_four.css'
import image from '../imageCards/laudo_técnico_ar_condicionado.jpg'
import imagePPCI from '../imageCards/laudo_técnico_ppci.jpg'
import imageEngenheiros from '../imageCards/maquinas_pesadas.png'


const StyledSection = styled('section')(() => ({
    position: 'relative',
    padding: '200px 0px 100px 0px',
    background: '#f5f5f5',
    height: '1100px',
    display: 'flex',
    justifyContent: 'space-around',
}))

const ContentSectionFour = () => {

    return (
        <>
            <StyledSection id="section-four" >
                <div className="divtitle"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '70px'
                    }}>
                    <h1 className="title"
                        style={{
                            color: '#093170',
                            fontWeight: '700'
                        }}>Laudos Técnicos</h1>
                </div>
                <Card className="cards"
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

                <Card className="cards"
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
                        }
                        }
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
                    <CardActions
                        sx={{
                            position: 'absolute',
                            bottom: '1px', display: 'flex',
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                        <Button variant="contained"
                            href="/laudo_tecnico_ppci"
                            sx={{ width: '100%' }}>
                            Saiba Mais
                        </Button>
                    </CardActions>
                </Card>
                <Card className="cards"
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
                        <img src={imageEngenheiros} alt="Descrição da Imagem"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Laudo Técnico de Máquinas Pesadas
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Contamos com engenheiros especializados na área de laudos técnicos para máquinas e equipamentos.
                            <ul
                                style={{
                                    paddingLeft: '25px',
                                    paddingTop: '15px'
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
                            href="/laudo_tecnico_maquinas_pesadas"
                            sx={{ width: '100%' }}>
                            Saiba Mais
                        </Button>
                    </CardActions>
                </Card>
            </StyledSection>
        </>
    )
}

export default ContentSectionFour