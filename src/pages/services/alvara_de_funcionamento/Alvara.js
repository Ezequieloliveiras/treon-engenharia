import React from "react"

import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogue from '../../../partials/button_dialogue/ButtonDialogue'
import BannerAlvara from "./components/banner/image_alvara.png"
import BackgroundServices from "../../../partials/background_services/BackgroundServices"

function Alvara() {
    return (
        <>
            <Container className="containerAlvara">
                <Content >
                    <BackgroundServices />
                    <div
                        style={{
                            height:'auto',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <img src={BannerAlvara} className="BannerImage"
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

export default Alvara