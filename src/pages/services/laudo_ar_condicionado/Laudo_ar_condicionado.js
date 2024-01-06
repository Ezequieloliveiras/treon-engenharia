import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogue from '../../../partials/buttonDialogue/ButtonDialogue'
import BannerAr from './components/banner/Laudo_ar_condicionado.jpg'
import Background from '../../../partials/background_services/BackgroundServices'

import '../../general_pages.css'
function Pmoc() {
    return (
        <>
            <Container className="containerAr">
                <Content >
                    <Background />
                    <div
                        style={{
                            height:'auto',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <img src={BannerAr} className="BannerImage"
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

export default Pmoc
