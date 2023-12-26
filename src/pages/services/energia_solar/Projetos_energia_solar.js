import React from "react"

import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button'
import BannerPainelSolar from './components/banner/painel_solar.webp'
import Background from '../../../partials/background_services/BackgroundServices'

import '../general.css'

function EnergiaSolar() {
    return (
        <>
            <Container className="containerEnergiaSolar">
                <Content >
                    <Background />
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height:'auto'
                        }}>
                        <img src={BannerPainelSolar}
                            style={{
                                width: '100%',
                                maxHeight: '400px',
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

export default EnergiaSolar