import ContainerContact from "./components/ContainerContact"
import ContentContact from "./components/ContentContact"
import SocialContact from "./components/SocialContact"
import ButtonDialogo from "../../partials/buttonDialogo/Button"
import BackgroundContact from '../../partials/background_services/BackgroundServices'

function PageContact() {
    return (
        <>
            <ContainerContact className="contactContainer">
                <ContentContact />
                <BackgroundContact />
                <SocialContact />
                <ButtonDialogo />
            </ContainerContact>
        </>
    )
}

export default PageContact