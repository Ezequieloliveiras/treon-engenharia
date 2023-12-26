import ButtonDialogo from '../../../partials/buttonDialogo/Button'
import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import BannerPrevencaoIncendio from './components/banner/prevencao_incendio.jpg'
import Background from '../../../partials/background_services/BackgroundServices'

import '../general.css'

function PrevencaoIncendio() {
    return (
        <>
            <Container className='containerPrevencao'>
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
                        <div className="div_banner"
                            style={{
                                height: '500px',
                                width: '100%',
                                overflow: 'hidden'
                            }}>
                            <img src={BannerPrevencaoIncendio}
                                style={{
                                    width: '100%',
                                    maxHeight: '400px',
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

export default PrevencaoIncendio