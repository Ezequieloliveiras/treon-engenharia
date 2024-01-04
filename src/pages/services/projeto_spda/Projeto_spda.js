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
                            height:'auto',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <img src={BannerSpda}
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
