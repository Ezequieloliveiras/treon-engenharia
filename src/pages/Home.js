import React from "react"
import { Link } from "react-router-dom"
import SectionOne from '../partials/sectionOne/Section-One'
import Content from "../partials/sectionOne/Section-One"


function Home() {
    return (
        <>
            <Content>
                <SectionOne>
                    <h1>Pagina Inicial</h1>
                    <ul>
                        <li>
                            <Link to="/users">Usuários</Link>
                        </li>
                    </ul>

                </SectionOne>
            </Content>
        </>
    )
}

export default Home