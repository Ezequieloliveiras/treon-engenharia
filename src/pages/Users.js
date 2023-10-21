import React from "react"
import { Link } from "react-router-dom"

function Users() {
    return (
        <>
            <h1>Usuários</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </>
    )
}

export default Users