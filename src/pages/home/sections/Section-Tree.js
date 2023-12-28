import { styled } from "@mui/material"

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import './section_tree.css'

import image from '../imageCards/projeto_eletrico.jpg'
import imageSpda from '../imageCards/spda.jpg'

const StyledSection = styled('section')(() => ({
    position: 'relative',
    padding: '200px 0px 100px 0px',
    background: '#eeeeee',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}))

const ContentSectionTree = () => {

    return (
        <>
            <StyledSection id="section-tree">
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
                        }}>Engenharia Elétrica</h1>
                </div>
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
                        title="PMOC"
                    >
                        <img src={image} alt="Descrição da Imagem"
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
                        title="PMOC"
                    />
                    <CardContent className="cardSolar">
                        <Typography gutterBottom variant="h5" component="div">
                            Energia Solar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Projetamos o seu sistema fotovoltaico conforme a sua demanda energética.
                            <ul
                                style={{
                                    paddingLeft: '25px',
                                    paddingTop: '15px'
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
                            href="/projeto_energia_solar"
                            sx={{ width: '100%' }}>
                            Saiba Mais
                        </Button>
                    </CardActions>
                </Card>

                <Card className="cardsTree"
                    sx={{
                        maxWidth: 400,
                        height: 580,
                        boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)',
                        position: 'relative'
                    }}>
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
                    <CardContent className="cardSpda">
                        <Typography gutterBottom variant="h5" component="div">
                            Projetos de SPDA
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Projetamos o seu sistema de proteção contra descarga atmosférica de acordo com a sua edificação.
                            <ul
                                style={{
                                    paddingLeft: '25px',
                                    paddingTop: '15px'
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
                        </Typography>
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
            </StyledSection>
        </>
    )
}



export default ContentSectionTree