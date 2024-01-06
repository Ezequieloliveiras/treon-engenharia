import ContentSectionOne from './sections/section-one/Section-One'
import ContentSectionTwo from './sections/section-two/Section-Two'
import ContentSectionTree from './sections/section-tree/Section-Tree'
import ContentSectionFour from './sections/section-four/Section-Four'

function Home() {
    return (
        <>
            <ContentSectionOne />
            <ContentSectionTwo />
            <ContentSectionTree />
            <ContentSectionFour />
        </>
    )
}

export default Home