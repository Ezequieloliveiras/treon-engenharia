import React from "react"

import Container  from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import YourComponent from "./components/button/Button"


function EnergiaSolar() {
    return (
        <>
            <Container >
                <Content >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                            backgroundImage: 'url(https://www.portalsolar.com.br/_next/image?url=https%3A%2F%2Fd3csixunm0sjcw.cloudfront.net%2Fwp-content%2Fuploads%2F2021%2F06%2F07160541%2Fsistema-fotovoltaico-on-grid.jpg&w=3840&q=100)'
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

export default EnergiaSolar