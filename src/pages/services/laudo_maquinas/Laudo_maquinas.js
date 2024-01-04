import React from "react"

import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button'
import BannerLaudoMaquinas from './components/banner/maquinas_pesadas.jpg'
import Background from '../../../partials/background_services/BackgroundServices'

import '../general.css'

function LaudoMaquinas() {
    return (
        <>
            <Container className="containerLaudoMaquinas">
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
                        <img src={BannerLaudoMaquinas}
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

export default LaudoMaquinas