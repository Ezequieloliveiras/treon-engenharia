import React from "react"

import Background from "./components/imageBackground/ImageBackground"
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"


function Sobre() {
    return (
        <>
            <Background />
            <Container >
                <Content >
                    <div style={{
                        backgroundImage: 'url(https://www.wallacearcondicionado.com.br/photos/slider/3.png)'
                        , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px', width: '100%', top:'0px'
                    }}>
                        teste
                    </div>

                    <Text />
                </Content>
            </Container>
        </>
    )
}

export default Sobre