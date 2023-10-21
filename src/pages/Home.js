import React from "react"
import { Link } from "react-router-dom"
import Header from "../partials/Header"

function Home() {
    return (
        <>
            <Header />
            <h1>Pagina Inicial</h1>
            <ul>
                <li>
                    <Link to="/users">Usuários</Link>
                </li>
            </ul>
        </>
    )
}

export default Home