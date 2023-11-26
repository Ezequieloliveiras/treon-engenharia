import React from "react"

import Background from "./components/imageBackground/ImageBackground"
import Container from "./components/containers/Container"
import Content from "./components/containers/content/Content"
import PrimaryBox from "./components/containers/content/boxes/PrimaryBox"
import Social from "./components/containers/content/boxes/socials/Social"


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