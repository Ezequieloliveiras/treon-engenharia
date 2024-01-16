import React from "react"

import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogue from '../../../partials/button_dialogue/ButtonDialogue'
import BannerLaudoMaquinas from './components/banner/maquinas_pesadas.jpg'
import Background from '../../../partials/background_services/BackgroundServices'

import '../../general_pages.css'

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
                        <img src={BannerLaudoMaquinas} className="BannerImage"
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

export default LaudoMaquinas