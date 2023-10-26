import { styled } from "@mui/material"


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





const StyledSection = styled('section')(() => ({
    background: 'withe',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-around'
}))




const ContentSectionTwo = () => {

    return (
        <>
            <StyledSection >
                <Card sx={{ maxWidth: 345, boxShadow: '0px 10px 10px 10px   rgba(0, 0, 0, 0.4)' }}>
                    <CardMedia
                        sx={{ height: 300 }}
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

                <Card sx={{ maxWidth: 345, boxShadow: '0px 10px 10px 10px   rgba(0, 0, 0, 0.4)' }}>
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

                <Card sx={{ maxWidth: 345, boxShadow: '0px 10px 10px 10px   rgba(0, 0, 0, 0.4)' }}>
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
                            <ul style={{paddingLeft:'25px', paddingTop:'30px'}}>
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

