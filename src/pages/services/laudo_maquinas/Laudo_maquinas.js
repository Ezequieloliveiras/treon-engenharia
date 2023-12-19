import React from "react"

import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import YourComponent from "./components/button/Button"
import BannerLaudoMaquinas from './components/banner/laudo_maquinas.jpg'

function LaudoMaquinas() {
    return (
        <>
            <Container >
                <Content >
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <div
                            style={{
                                height: '500px',
                                width: '100%',
                                overflow: 'hidden'
                            }}>
                            <img src={BannerLaudoMaquinas}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </div>

                        <Text />
                    </div>
                    <YourComponent />
                </Content>
            </Container>
        </>
    )
}

export default LaudoMaquinas