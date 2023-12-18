import React from "react"

import Container  from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import YourComponent from "./components/button/Button"


function LaudoTecnicoPPCI() {
    return (
        <>
            <Container >
                <Content >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                            backgroundImage: 'url(https://www.mifire.com.br/wp-content/uploads/2019/08/MiFire_BlogPost_13-08-2019_Dentro-da-lei-%C3%A9-obrigat%C3%B3rio-ter-extintores-em-minha-empresa_V2.jpg)'
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

export default LaudoTecnicoPPCI