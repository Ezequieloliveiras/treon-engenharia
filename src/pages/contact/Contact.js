import React from "react"

import Background from "./components/imageBackground/ImageBackground"
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import PrimaryBox from "./components/boxes/PrimaryBox"
import Social from "./components/socials/Social"


function Sobre() {
    return (
        <>
            <Background />
            <Container >
                <Content >
                    <PrimaryBox>
                        <Social />
                    </PrimaryBox>
                </Content>
            </Container>
        </>
    )
}

export default Sobre