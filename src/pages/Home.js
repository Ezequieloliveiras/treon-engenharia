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
            <footer style={{
                width: '100%',
                backgroundColor: 'grey',
                color: 'white',
                height: '70px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                

            }}>FOOTER</footer>
        </>
    )
}

export default Home