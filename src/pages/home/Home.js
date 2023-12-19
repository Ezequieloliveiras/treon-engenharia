import ContentSectionOne from './sections/Section-One'
import ContentSectionTwo from './sections/Section-Two'
import ContentSectionTree from './sections/Section-Tree'
import ContentSectionFour from './sections/Section-Four'
import Footer from '../../partials/footer/Footer'

function Home() {
    return (
        <>
            <ContentSectionOne />
            <ContentSectionTwo />
            <ContentSectionTree />
            <ContentSectionFour />
            <Footer />
        </>
    )
}

export default Home