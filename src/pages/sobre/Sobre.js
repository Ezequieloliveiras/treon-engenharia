import React from "react"
import Background from "./image/Image"
import Container from "./sobrestyles/Container"
import Content from "./sobrestyles/Content"
import PrimaryBox from "./sobrestyles/boxes/PrimaryBox"
import SecondaryBox from "./sobrestyles/boxes/SecondaryBox"
import Text from "./sobrestyles/boxes/Text"
import ImageSobre from "./sobrestyles/boxes/ImageSobre"

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
