import React from "react"

import Background from '../../partials/background_services/BackgroundServices'
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import ImageAbout from "./components/imageAbout/ImageAbout"

function Sobre() {
    return (
        <>
            <Background />
            <Container >
                <Content />
                <Text />
                <ImageAbout />
            </Container>
        </>
    )
}

export default Sobre