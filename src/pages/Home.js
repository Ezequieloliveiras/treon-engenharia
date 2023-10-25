import React from "react"

import ContentSectionOne from '../partials/sections/Section-One'
import ContentSectionTwo from '../partials/sections/Section-Two'
import ContentSectionTree from '../partials/sections/Section-Tree'

function Home() {
    return (
        <>
            <ContentSectionOne />
            <ContentSectionTwo />
            <ContentSectionTree />
        </>
    )
}

export default Home