import React from "react"

import Background from "../about/imageBackground/ImageBackground"
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import PrimaryBox from "./aboutStyles/boxes/PrimaryBox"
import SecondaryBox from "./aboutStyles/boxes/SecondaryBox"
import Text from "./components/text/Text"
import ImageSobre from "./components/imageAbout/ImageAbout"

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