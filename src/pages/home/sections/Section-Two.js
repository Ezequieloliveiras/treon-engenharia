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
    background: 'withe',
    padding: '150px 0px 100px 0px',
    height: '1000px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems:'center'
}))


const ContentSectionTwo = () => {

    return (
        <>
            <StyledSection >
                <h1 style={{ position: 'absolute', top: '0px', color:'#093170' }}>ENGENHARIA MECÂNICA</h1>
                <Card sx={{ maxWidth: 345, height: 600, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)' }}>
                    <CardMedia
                        sx={{ maxWidth:'100%', height: 300 }}
                        image="https://static.wixstatic.com/media/b65cfd_8865fcfce5364f11831ccc7f0eab3e81~mv2.jpg/v1/fill/w_300,h_227,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pmoc.jpg"
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
                    <CardActions>
                        <Button size="small">COMPARTILHAR</Button>
                        <Button size="small">SABER MAIS</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, height: 600, boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, 0.4)' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="https://static.wixstatic.com/media/b65cfd_8bb602e949a0413284ef77c7be5fcbfe~mv2.jpg/v1/fill/w_300,h_227,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ppci.jpg"
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


export default ContentSectionTwo

