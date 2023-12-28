import Container from "./components/Container"
import Content from "./components/Content"
import Social from "./components/Social"
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