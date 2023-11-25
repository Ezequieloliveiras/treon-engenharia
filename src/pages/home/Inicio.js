import React from "react"

import ContentSectionOne from './sections/Section-One'
import ContentSectionTwo from './sections/Section-Two'
import ContentSectionTree from './sections/Section-Tree'

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