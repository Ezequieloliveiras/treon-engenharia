import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogue from '../../../partials/buttonDialogue/ButtonDialogue'
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
                            height:'auto',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <img src={BannerLaudoPpci} className="BannerImage"
                            style={{
                                width: '100%',
                                height: '500px',
                                objectFit: 'cover'
                            }} />
                    </div>
                    <Text />
                    <ButtonDialogue />
                </Content>
            </Container>
        </>
    )
}

export default LaudoTecnicoPPCI