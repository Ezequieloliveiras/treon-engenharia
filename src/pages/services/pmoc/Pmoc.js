import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button'
import BannerPmoc from './components/banner/pmoc.png'
import Background from '../../../partials/background_services/BackgroundServices'
import '../general.css'

function Pmoc() {
    return (
        <>
            <Container className="containerPmoc">
                <Content >
                    <Background />
                    <div
                        style={{
                            height: 'auto',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>

                        <img src={BannerPmoc}
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

export default Pmoc
