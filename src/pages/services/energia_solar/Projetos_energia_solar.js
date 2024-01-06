import React from "react"

import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogue from '../../../partials/buttonDialogue/ButtonDialogue'
import BannerPainelSolar from './components/banner/painel_solar.webp'
import Background from '../../../partials/background_services/BackgroundServices'

import '../../general_pages.css'

function EnergiaSolar() {
    return (
        <>
            <Container className="containerEnergiaSolar">
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
                        <img src={BannerPainelSolar} className="BannerImage"
                            style={{
                                width: '100%',
                                height: '500px',
                                objectFit: 'cover'
                            }} />
                    </div>
                    <Text />
                    <ButtonDialogue />
                </Content>
            </Container>
        </>
    )
}

export default EnergiaSolar