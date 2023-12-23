import styled from "@emotion/styled"

const TextStyle = styled('div')(() => ({
    height: '400px',
    left: '50px',
    marginTop: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}))

const Text = () => {

    return (
        <>
            <TextStyle id="text_style">
                <h1
                    style={{
                        color: '#093170',
                        marginBottom: '50px',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                    Alvará de funcionamento
                </h1>
                <div className="container_text"
                    style={{
                        color: '#093170',
                        textAlign: 'justify',
                        width: '900px'
                    }}>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        1.  Por que obter o Alvará de Funcionamento dos Bombeiros é crucial para estabelecimentos comerciais e industriais?
                    </h5>
                    <p>
                        O Alvará de Funcionamento dos Bombeiros é crucial porque atesta que o estabelecimento cumpre normas de segurança contra incêndios, garantindo a proteção de vidas e bens em caso de emergências.
                    </p>

                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        2. Quais são as vantagens específicas para um negócio ao possuir o Alvará de Funcionamento dos Bombeiros?
                    </h5>
                    <p>
                        Além de cumprir com obrigações legais, ter o Alvará de Funcionamento dos Bombeiros pode melhorar a imagem do negócio, aumentando a confiança dos clientes e colaboradores, e evitando multas e penalidades por não conformidade.
                    </p>

                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        3.  Como o Alvará de Funcionamento dos Bombeiros contribui para a prevenção de incêndios em estabelecimentos comerciais?
                    </h5>
                    <p>
                        O alvará envolve a verificação de medidas preventivas, como sistemas de combate a incêndios, iluminação de emergência e rotas de evacuação, contribuindo para minimizar os riscos e proporcionar uma resposta eficiente em caso de incêndio.

                    </p>

                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        4. Qual é o impacto do Alvará de Funcionamento dos Bombeiros na segurança dos ocupantes de um edifício?
                    </h5>
                    <p>
                        O alvará assegura que o edifício atenda aos requisitos de segurança estabelecidos pelos bombeiros, proporcionando um ambiente mais seguro para os ocupantes, com procedimentos claros em caso de emergências.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        5. Como o Alvará de Funcionamento dos Bombeiros pode ser um diferencial competitivo para empresas?
                    </h5>
                    <p>
                        Empresas que possuem o alvará demonstram comprometimento com a segurança, o que pode ser um diferencial competitivo. Além disso, a conformidade legal pode abrir portas para parcerias e contratos, uma vez que muitos clientes consideram esses aspectos ao escolherem fornecedores.
                    </p>
                </div>
            </TextStyle>
        </>
    )
}

export default Text