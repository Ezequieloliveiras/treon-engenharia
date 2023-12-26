import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button'
import BannerLaudoPpci from './components/banner/laudo_ppci.jpg'
import Background from '../../../partials/background_services/BackgroundServices'

import '../general.css'

function LaudoTecnicoPPCI() {
    return (
        <>
            <Container className="containerLaudoPpci">
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
                        <img src={BannerLaudoPpci}
                            style={{
                                width: '100%',
                                maxHeight: '400px',
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

export default LaudoTecnicoPPCI