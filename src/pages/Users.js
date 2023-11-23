import React from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"

const StyledSection = styled('section')(() => ({
    position: 'relative',
    backgroundColor: '#093170',
    height: '100vh',

}))


function Users() {
    return (
        <StyledSection >
            <h1 style={{ color: 'white' }}>
                Sobre
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <div style={{ height: '350px', width: '600px', border: '1px solid grey', borderRadius: '10px', backgroundColor: 'white', padding: '15px', position: 'absolute', top: '200px', right: '200px'}}>
                <p style={{ color: 'grey' }}>
                    imagem
                </p>
            </div>
            <div style={{ height: '300px', width: '500px', border: '1px solid grey', borderRadius: '10px', backgroundColor: 'white', padding: '15px', position: 'absolute', top: '70px', right: '700px' }}>
                <p style={{ color: 'grey' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </StyledSection>
    )
}

export default Users

