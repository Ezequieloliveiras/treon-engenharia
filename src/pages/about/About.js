import ContainerAbout from "./components/ContainerAbout"
import ContentAbout from "./components/ContentAbout"
import TextAbout from "./components/TextAbout"
import ImageAbout from "./components/ImageAbout"
import BackgroundAbout from '../../partials/background_services/BackgroundServices'
import ButtonDialogue from '../../partials/buttonDialogue/ButtonDialogue'

function PageAbout() {
    return (
        <>
            <BackgroundAbout />
            <ContainerAbout className="containerAbout" >
                <ContentAbout />
                <TextAbout />
                <ImageAbout className="imageAbout" />
                <ButtonDialogue />
            </ContainerAbout>
        </>
    )
}

export default PageAbout