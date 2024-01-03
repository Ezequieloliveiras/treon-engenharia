import BackgroundAbout from '../../partials/background_services/BackgroundServices'
import ContainerAbout from "./components/ContainerAbout"
import ContentAbout from "./components/ContentAbout"
import TextAbout from "./components/TextAbout"
import ImageAbout from "./components/ImageAbout"

function About() {
    return (
        <>
            <BackgroundAbout />
            <ContainerAbout className="containerAbout" >
                <ContentAbout />
                <TextAbout />
                <ImageAbout className="imageAbout"/>
            </ContainerAbout>
        </>
    )
}

export default About