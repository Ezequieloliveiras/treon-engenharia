import { styled } from "@mui/material"

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import image from './image/alvara_de_licenca.png'

const StyledSection = styled('section')(() => ({
    position: 'relative',
    background: '#f5f5f5',
    padding: '200px 0px 100px 0px',
    height: '1000px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}))


const ContentSectionTwo = () => {

    return (
        <>
            <StyledSection >
                <h1 style={{
                    position: 'absolute',
                    top: '70px',
                    color: '#093170'
                }}>ENGENHARIA MECÂNICA</h1>
                <Card sx={{
                    maxWidth: 400, height: 580,
                    boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)',
                    position: 'relative'
                }}>
                    <CardMedia
                        sx={{ width: 'auto', height: 300 }}
                        image="https://img.freepik.com/fotos-premium/servico-tecnico-remover-o-filtro-de-ar-do-ar-condicionado-para-limpeza_35076-3617.jpg"
                        title="PMOC"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PMOC
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A Treon Engenharia é referência no setor de refrigeração e climatização, onde nossos engenheiros possuem expertise na elaboração do plano de manutenção, operação e controle (PMOC). Também realizamos a manutenção preventiva e corretiva de ar condicionados de todos modelos.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ position: 'absolute', bottom: '0' }}>
                        <Button size="small">SAIBA MAIS</Button>
                    </CardActions>
                </Card>

                <Card sx={{
                    maxWidth: 400,
                    height: 580,
                    boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)',
                    position: 'relative'
                }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="https://www.comefogo.com.br/uploads/pagina/elemento/campo/2020/06/NLeHvUYQwRdigdwP/projeto-de-prevencao-e-combate-a-incendio-qual-a-importancia-e-quem-deve-fazer_875x540.jpg"
                        title="PMOC"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PROJETOS DE PREVENÇÃO A INCÊNDIO
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Contamos com um time de projetistas experientes para regularizar sua empresa junto ao corpo de bombeiro. Elaboramos o projeto de prevenção e combate a incêndio (PPCI) conforme sua necessidade. Também te ajudamos na liberação do alvará de funcionamento.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ position: 'absolute', bottom: '0' }}>
                        <Button size="small">SAIBA MAIS</Button>
                    </CardActions>
                </Card>

                <Card sx={{
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
                        title="PMOC"
                    >
                        <img src={image} alt="Descrição da Imagem" style={{ width: '250px', height: '290px' }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ALVARÁ DE FUNCIONAMENTO CBMES
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ajudamos empresas de todos os segmentos na regularização e liberação dos alvarás de funcionamento junto ao CBMES.
                            <ul style={{ paddingLeft: '25px', paddingTop: '15px' }}>
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
                    <CardActions sx={{ position: 'absolute', bottom: '0' }}>
                        <Button size="small">SAIBA MAIS</Button>
                    </CardActions>
                </Card>
            </StyledSection>

        </>
    )
}


export default ContentSectionTwo

