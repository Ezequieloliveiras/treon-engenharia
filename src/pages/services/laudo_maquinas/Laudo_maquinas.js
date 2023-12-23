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
                            <img src={BannerLaudoMaquinas}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit:'cover'
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

export default LaudoMaquinas