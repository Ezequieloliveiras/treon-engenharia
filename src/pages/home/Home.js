import ContentSectionOne from './sections/Section-One'
import ContentSectionTwo from './sections/Section-Two'
import ContentSectionTree from './sections/Section-Tree'
import Footer from './footer/Footer'

function Home() {
    return (
        <>
            <ContentSectionOne />
            <ContentSectionTwo />
            <ContentSectionTree />
            <Footer/>
        </>
    )
}

export default Home