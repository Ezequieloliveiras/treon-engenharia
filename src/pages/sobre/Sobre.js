import React from "react"
<<<<<<< HEAD
import Background from "./image/Image"
=======
import Background from "./Image"
>>>>>>> e9a19fe3e00a47f0bb25f6c2a21ef1de4700e2da
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
