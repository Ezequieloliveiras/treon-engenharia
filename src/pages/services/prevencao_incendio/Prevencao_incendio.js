import React from "react"

import Container  from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import YourComponent from "./components/button/Button"


function PrevencaoIncendio() {
    return (
        <>
            <Container >
                <Content >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                            backgroundImage: 'url(https://inovaauditoria.com.br/wp-content/uploads/2019/10/alarme-incendio.jpg)'
                            , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px', width: '100%', top: '0px'
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

export default PrevencaoIncendio