import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Social from "./components/socials/Social"
import Background from '../../partials/background_services/BackgroundServices'
import ButtonDialogo from "../../partials/buttonDialogo/Button"

function Sobre() {
    return (
        <>
            <Container >
                <Content />
                <Background />
                <Social />
                <ButtonDialogo />
            </Container>
        </>
    )
}

export default Sobre