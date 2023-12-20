import styled from "@emotion/styled"

const TextStyle = styled('div')(() => ({
    left: '50px',
    borderRadius: '10px',
    marginBottom: '90px'
}))

const Text = () => {

    return (
        <>
            <TextStyle >
                <h1
                    style={{
                        marginBottom: '80px',
                        fontWeight: 'bold',
                        color: '#093170',
                    }}>
                    Quem Somos
                </h1>
                <p
                    style={{
                        width: '600px',
                        textAlign: 'justify',
                        fontSize: '20px',
                        color: '#093170',
                    }}>
                    A Treon Engenharia é uma empresa especializada em serviços de engenharia mecânica e elétrica. Oferecemos serviços e soluções de excelência no mercado atuando em duas grandes áreas, a engenharia legal que consiste na regularização e adequação de empresas, máquinas, equipamentos, e sistemas de refrigeração ás normas e leis vigentes. Atuamos também no setor da engenharia de projetos elétricos, mecânicos e prevenção de incêndio e pânico.
                    Nossa equipe de Engenheiros e técnicos atende em todo o estado do Espírito Santo. Para entrar em contato com um de nossos engenheiros, basta clicar no botão abaixo.
                </p>
            </TextStyle>
        </>
    )
}


export default Text