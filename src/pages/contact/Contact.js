import ContainerContact from "./components/ContainerContact"
import ContentContact from "./components/ContentContact"
import SocialContact from "./components/SocialContact"
import ButtonDialogue from "../../partials/buttonDialogue/ButtonDialogue"
import BackgroundContact from '../../partials/background_services/BackgroundServices'

function PageContact() {
    return (
        <>
            <ContainerContact className="contactContainer">
                <ContentContact />
                <BackgroundContact />
                <SocialContact />
                <ButtonDialogue />
            </ContainerContact>
        </>
    )
}

export default PageContact