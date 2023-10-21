import React from "react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
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