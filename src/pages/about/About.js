import React from "react"

import Background from '../../partials/background_services/BackgroundServices'
import Container from "./components/Container"
import Content from "./components/Content"
import Text from "./components/Text"
import ImageAbout from "./components/ImageAbout"

function Sobre() {
    return (
        <>
            <Background />
            <Container className="containerAbout" >
                <Content />
                <Text />
                <ImageAbout  className="imageAbout"/>
            </Container>
        </>
    )
}

export default Sobre