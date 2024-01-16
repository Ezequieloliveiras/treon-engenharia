import ContainerAbout from "./components/ContainerAbout"
import ContentAbout from "./components/ContentAbout"
import TextAbout from "./components/TextAbout"
import ImageAbout from "./components/ImageAbout"
import ButtonDialogue from '../../partials/button_dialogue/ButtonDialogue'
import BackgroundAbout from '../../partials/background_services/BackgroundServices'

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