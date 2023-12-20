import React from "react"

import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button' 
import BannerLaudoPpci from './components/banner/laudo_ppci.jpg'
import Background from '../../../partials/background_services/BackgroundServices'


function LaudoTecnicoPPCI() {
    return (
        <>
            <Container >
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
                        <div style={{
                            height: '500px',
                            width: '100%',
                            overflow: 'hidden'
                        }}>
                            <img src={BannerLaudoPpci}
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

export default LaudoTecnicoPPCI