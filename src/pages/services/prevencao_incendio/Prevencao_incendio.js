import React from "react"

import YourComponent from "./components/button/Button"
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import BannerPrevencaoIncendio from './components/banner/prevencao_incendio.jpg'


function PrevencaoIncendio() {
    return (
        <>
            <Container >
                <Content >
                    <div style={{
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
                            <img src={BannerPrevencaoIncendio}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
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

export default PrevencaoIncendio