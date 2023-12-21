import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button' 
import BannerProjetosEletricos from './components/banner/projetos_eletricos.jpg'
import Background from '../../../partials/background_services/BackgroundServices'

function ProjetoEletrico() {
    return (
        <>
            <Container >
                <Content >
                    <Background />
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <div
                            style={{
                                height: '500px',
                                width: '100%',
                                overflow: 'hidden'
                            }}>
                            <img src={BannerProjetosEletricos}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                        </div>
                        <Text />
                    </div>
                    <ButtonDialogo />
                </Content>
            </Container>
        </>
    )
}

export default ProjetoEletrico