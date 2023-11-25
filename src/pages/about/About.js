import React from "react"

import Background from "./components/imageBackground/ImageBackground"
import Container from "./components/containers/Container"
import Content from "./components/containers/content/Content"
import PrimaryBox from "./components/containers/content/boxes/PrimaryBox"
import SecondaryBox from "./components/containers/content/boxes/SecondaryBox"
import Text from "./components/containers/content/boxes/text/Text"
import ImageSobre from "./components/containers/content/boxes/imageAbout/ImageAbout"

function Sobre() {
    return (
        <>
            <Background />
            <Container >
                <Content >
                    <PrimaryBox>
                        <Text />
                    </PrimaryBox>
                    <SecondaryBox>
                        <ImageSobre />
                    </SecondaryBox>
                </Content>
            </Container>
        </>
    )
}

export default Sobre