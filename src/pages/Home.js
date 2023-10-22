import React from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import StyledSectionOne from '../partials/sectionOne/Section-One'


const StyledDiv = styled('div')(() => ({
    position: 'relative',
    textAlign:'center',
    paddingTop:'80px'

}))

const BackgroundSection = styled(StyledSectionOne)(() => ({
    position: 'absolute',
    width: '100%',
    height: '100%',

}))

function Home() {
    return (
        <>
            <BackgroundSection />
            <StyledDiv>
                <h1 style={{fontSize: '62px', }}>NOSSOS SERVIÇOS DE ENGENHARIA</h1>
                <ul>
                    <li>
                        <Link to="/users">Usuários</Link>
                    </li>
                </ul>
            </StyledDiv>
        </>
    )
}

export default Home