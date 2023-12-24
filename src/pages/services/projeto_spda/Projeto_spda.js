import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button'
import BannerSpda from './components/banner/projeto_spda.jpg'
import Background from '../../../partials/background_services/BackgroundServices'
import '../general.css'

function Pmoc() {
    return (
        <>
            <Container className="containerSpda">
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
                            <img src={BannerSpda}
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

export default Pmoc
