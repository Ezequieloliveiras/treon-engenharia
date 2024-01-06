import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import BannerPrevencaoIncendio from './components/banner/prevencao_incendio.jpg'
import Background from '../../../partials/background_services/BackgroundServices'
import ButtonDialogue from '../../../partials/buttonDialogue/ButtonDialogue'

import '../general.css'

function PrevencaoIncendio() {
    return (
        <>
            <Container className='containerPrevencao'>
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
                        <img src={BannerPrevencaoIncendio} className="BannerImage"
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

export default PrevencaoIncendio