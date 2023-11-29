import { styled } from "@mui/material"

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
    height: '1000px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems:'center',
    background: '#f5f5f5',
}))


const ContentSectionTree = () => {

    return (
        <>

            <StyledSection >
                <h1 style={{ position: 'absolute', top: '70px', color: '#093170' }}>ENGENHARIA ELÉTRICA</h1>
                <Card sx={{ maxWidth: 345, height: 600, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="https://static.wixstatic.com/media/b65cfd_496a99e8a0e449ab9a7a2c7bf0a18ffd~mv2.jpg/v1/fill/w_300,h_227,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PROJ%20ELETRICO_edited.jpg"
                        title="PMOC"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PROJETOS ELÉTRICOS

                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                            PROJETOS ELÉTRICOS
                            Realizamos o seu projeto conforme sua necessidade (residencial, comercial e industrias).
                            <br /> <br />
                            Contamos com profissionais experientes para entregar o melhor custo beneficio, e também homologamos o seu projeto junto a EDP seguindo todos os procedimentos legais.                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">COMPARTILHAR</Button>
                        <Button size="small">SABER MAIS</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, height: 600, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="https://static.wixstatic.com/media/b65cfd_3f4bc27f10284a0d9b1ce039475a7fa3~mv2.jpg/v1/fill/w_254,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fotovoltaico_edited.jpg"
                        title="PMOC"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ENERGIA SOLAR
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Projetamos o seu sistema fotovoltaico conforme a sua demanda energética.
                            <ul style={{ paddingLeft: '25px', paddingTop: '15px' }}>
                                <li>
                                    Acompanhamento de execução;
                                </li>
                                <li>
                                    Testes + laudos técnicos;
                                </li>
                                <li>
                                    Projetos residenciais, comerciais e industriais;
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">COMPARTILHAR</Button>
                        <Button size="small">SABER MAIS</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, height: 600, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="https://static.wixstatic.com/media/b65cfd_d24eb9faae4c4960a229e8fc6baebdc0~mv2.jpg/v1/fill/w_300,h_227,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/alcb_edited.jpg"
                        title="PMOC"
                    />
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
                    <CardActions>
                        <Button size="small">COMPARTILHAR</Button>
                        <Button size="small">SABER MAIS</Button>
                    </CardActions>
                </Card>

            </StyledSection>

        </>
    )
}



export default ContentSectionTree