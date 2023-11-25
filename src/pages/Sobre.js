import React from "react"
import styled from "@emotion/styled"

const StyledSection = styled('section')(() => ({
    position: 'relative',
    height: '670px',
}))


function Sobre() {
    return (
        <StyledSection >
            <h1 style={{ color: '#093170', marginTop: '80px', marginLeft:'80px' }}>
                QUEM SOMOS
            </h1>
            <div style={{
                height: '400px',
                width: '650px',
                borderRadius: '10px',
                position: 'absolute',
                top: '150px',
                right: '85px',
                backgroundImage: 'url(https://img.freepik.com/fotos-premium/inspecao-do-engenheiro-extintor-de-incendio-na-sala-de-controle_34936-1725.jpg?w=740)',
                backgroundSize: 'cover',
            }}>
            </div>

            <div style={{
                height: '400px',
                width: '500px',
                borderRadius: '10px',
                padding: '30px',
                position: 'absolute',
                top: '150px',
                left: '50px'
            }}>
                <p style={{ color: '#093170', textAlign: 'justify' }}>
                    A Treon Engenharia é uma empresa especializada em serviços de engenharia mecânica e elétrica. Oferecemos serviços e soluções de excelência no mercado atuando em duas grandes áreas, a engenharia legal que consiste na regularização e adequação de empresas, máquinas, equipamentos, e sistemas de refrigeração ás normas e leis vigentes. Atuamos também no setor da engenharia de projetos elétricos, mecânicos e prevenção de incêndio e pânico.
                    Nossa equipe de Engenheiros e técnicos atende em todo o estado do Espírito Santo. Para entrar em contato com um de nossos engenheiros, basta clicar no botão abaixo.
                </p>
            </div>
        </StyledSection>
    )
}

export default Sobre

