import React from "react"

import Container from "./components/containers/Container";

import Content from "./components/content/Content"
import Text from "./components/text/Text"
import YourComponent from "./button/Button"

function Pmoc() {
    return (
        <>
            <Container >
                <Content >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                            backgroundImage: 'url(https://www.wallacearcondicionado.com.br/photos/slider/3.png)'
                            , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px', width: '100%', top: '0px'
                        }}>
                        </div>
                        <Text />
                    </div>
                    <YourComponent />
                </Content>
            </Container>
        </>
    )
}

export default Pmoc