import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button' 
import BannerProjetosEletricos from './components/banner/projetos_eletricos.jpg'
import Background from '../../../partials/background_services/BackgroundServices'

import '../general.css'

function ProjetoEletrico() {
    return (
        <>
            <Container className="containerProjetoEletrico">
                <Content >
                    <Background />
                        <div className="div_banner "
                            style={{
                                height: 'auto',
                                width: '100%',
                                overflow: 'hidden'
                            }}>
                            <img src={BannerProjetosEletricos} className="BannerImage"
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    objectFit: 'cover'
                                }} />
                        </div>
                        <Text />
                    <ButtonDialogo />
                </Content>
            </Container>
        </>
    )
}

export default ProjetoEletrico