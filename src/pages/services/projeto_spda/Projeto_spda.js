import React from "react"

import YourComponent from "./components/button/Button"
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import BannerProjetoSpda from './components/banner/projeto_spda.jpg'
import Background from '../../../partials/background_services/BackgroundServices'

function ProjetoSpda() {
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
                        <div
                            style={{
                                height: '500px',
                                width: '100%',
                                overflow: 'hidden'
                            }}>
                            <img src={BannerProjetoSpda}
                                style={{
                                    width: '100%',
                                    height: '100%',
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

export default ProjetoSpda