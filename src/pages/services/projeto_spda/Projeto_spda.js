import React from "react"

import YourComponent from "./components/button/Button"
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"

function ProjetoSpda() {
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
                            backgroundImage: 'url(https://www.cemig.com.br/wp-content/uploads/2020/05/descline.jpg)', backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '500px',
                            width: '100%',
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

export default ProjetoSpda