import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button'
import BannerAr from './components/banner/Laudo_ar_condicionado.jpg'
import Background from '../../../partials/background_services/BackgroundServices'
import '../general.css'

function Pmoc() {
    return (
        <>
            <Container className="containerAr">
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
                            <img src={BannerAr}
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

export default Pmoc
