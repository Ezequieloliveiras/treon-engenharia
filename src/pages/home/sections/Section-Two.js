import { styled } from "@mui/material"

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import './section_two.css'

import ButtonDialog from '../../../partials/buttonDialogo/Button'
import ImageAlvara from '../card_images/alvara_de_licenca.png'


const StyledSectionTwo = styled('section')(() => ({
    position: 'relative',
    height: '950px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign:'left',
    background: '#f5f5f5',
}))

const ContentSectionTwo = () => {

    return (
        <>
            <StyledSectionTwo id="section-two" >
                <div className="divtitle"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '70px',
                        padding: '0px'
                    }}>
                    <h1 className="title"
                        style={{
                            color: '#093170',
                            fontWeight: '700'
                        }}>Engenharia Mecânica</h1>
                </div>
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
                            <ul
                                style={{
                                    paddingLeft: '25px',
                                    paddingTop: '15px'
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
                            href="/alvara_de_funcionamento"
                            sx={{ width: '100%' }}>
                            Saiba Mais
                        </Button>
                    </CardActions>
                </Card>
                <ButtonDialog />
            </StyledSectionTwo>
        </>
    )
}

export default ContentSectionTwo

