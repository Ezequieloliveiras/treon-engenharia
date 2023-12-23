import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button'
import BannerPmoc from './components/banner/pmoc.png'
import Background from '../../../partials/background_services/BackgroundServices'
import './pmoc.css'

function Pmoc() {
    return (
        <>
            <Container id="containerPmoc">
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
                            <img src={BannerPmoc}
                                style={{
                                    width: '100%',
                                    height: 'auto',
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

export default Pmoc
