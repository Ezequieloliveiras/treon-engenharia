import React from "react"

import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ButtonDialogo from '../../../partials/buttonDialogo/Button'
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
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <img src={BannerAlvara}
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

export default Alvara