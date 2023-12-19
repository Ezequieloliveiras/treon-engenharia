import React from "react"

import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import YourComponent from "./components/button/Button"

function Alvara() {
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
                            backgroundImage: 'url(https://assets-global.website-files.com/62d6ff493de2c880da3bfdeb/63e2b771d9aba1129836d3de_CAPA%20AVCB.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '500px',
                            width: '100% ' ,
                            top: '0px'
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

export default Alvara