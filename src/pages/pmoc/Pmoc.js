import React from "react"

import Background from "./components/imageBackground/ImageBackground"
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import PrimaryBox from "./components/boxes/PrimaryBox"
import SecondaryBox from "./components/boxes/SecondaryBox"
import Text from "./components/text/Text"
import ImageSobre from "./components/imageAbout/ImageAbout"

function Sobre() {
    return (
        <>
            <Background />
            <Container >
                <Content >
                    <SecondaryBox>
                        <ImageSobre />
                    </SecondaryBox>
                    <PrimaryBox>
                        <Text />
                    </PrimaryBox>
                </Content>
            </Container>
        </>
    )
}

export default Sobre