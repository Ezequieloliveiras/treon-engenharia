import React from "react"
import styled from "@emotion/styled"
import Background from "./Image"

const StyledDiv = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position:'absolute',
    top:'-70px'
}))


function Sobre() {
    return (
        <>
            <Background />
            <div style={{ position: 'relative', display:'flex', justifyContent:'center' }}>
                <StyledDiv >
                    <div style={{ height: '300px', width: 'auto' }}>
                        <div style={{
                            height: '400px',
                            width: '500px',
                            borderRadius: '10px',
                            left: '50px'
                        }}>
                            <h1 style={{ color: '#093170', marginBottom: '50px' }}>
                                QUEM SOMOS
                            </h1>
                            <p style={{ color: '#093170', textAlign: 'justify', width: '410px' }}>
                                A Treon Engenharia é uma empresa especializada em serviços de engenharia mecânica e elétrica. Oferecemos serviços e soluções de excelência no mercado atuando em duas grandes áreas, a engenharia legal que consiste na regularização e adequação de empresas, máquinas, equipamentos, e sistemas de refrigeração ás normas e leis vigentes. Atuamos também no setor da engenharia de projetos elétricos, mecânicos e prevenção de incêndio e pânico.
                                Nossa equipe de Engenheiros e técnicos atende em todo o estado do Espírito Santo. Para entrar em contato com um de nossos engenheiros, basta clicar no botão abaixo.
                            </p>
                        </div>
                    </div>
                    <div style={{ height: '250px', width: 'auto' }}>
                        <div style={{
                            height: '340px',
                            width: '650px',
                            borderRadius: '10px',
                            right: '85px',
                            backgroundImage: 'url(https://img.freepik.com/fotos-premium/inspecao-do-engenheiro-extintor-de-incendio-na-sala-de-controle_34936-1725.jpg?w=740)',
                            backgroundSize: 'cover',
                        }}>
                        </div>
                    </div>

                </StyledDiv>
            </div>
        </>
    )
}

export default Sobre
