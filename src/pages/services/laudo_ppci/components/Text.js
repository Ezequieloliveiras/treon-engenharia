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
                <h1 id="title"
                    style={{
                        color: '#093170',
                        marginBottom: '50px',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                    Laudo técnico de Projeto de Prevenção e Combate a Incêndio
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
                        1.  O laudo técnico em sistemas de prevenção e combate a incêndio é crucial para verificar a conformidade, eficácia e funcionamento adequado desses sistemas. Ele garante a segurança das instalações e a proteção contra incêndios, identificando possíveis falhas e propondo correções.
                    </h5>
                    <p>
                        A Treon Engenharia, uma empresa dedicada à segurança, conta com profissionais especializados, experientes e credenciados no Corpo de Bombeiros no estado do Espírito Santo para a elaboração de projetos de prevenção e combate a incêndio. Eles são especialistas em desenvolver estratégias de detecção, prevenção, sistemas de combate, sinalização de emergência e saídas de evacuação. A conformidade com normas técnicas e regulamentos é essencial para a aprovação do projeto pelos órgãos fiscalizadores.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        2. Quais são os elementos essenciais que devem ser abordados em um laudo técnico de sistemas de prevenção e combate a incêndio?
                    </h5>
                    <p>
                        Um laudo técnico deve abordar a identificação do cliente, descrição detalhada dos sistemas instalados, análise de conformidade com normas e regulamentos, condições operacionais, resultados de testes de funcionamento, identificação de possíveis falhas e recomendações para correções.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        3. Como a conformidade com normas e regulamentos é avaliada em um laudo técnico de sistemas de prevenção e combate a incêndio?
                    </h5>
                    <p>
                        A conformidade é avaliada comparando os sistemas instalados com as normas e regulamentos locais e nacionais pertinentes. Isso inclui a verificação de instalação correta, uso de materiais aprovados, e a observância de padrões de desempenho e manutenção.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        4. Quais testes são comumente realizados durante a elaboração de um laudo técnico em sistemas de prevenção e combate a incêndio?
                    </h5>
                    <p>
                        Testes comuns incluem a verificação do funcionamento de extintores, sprinklers, alarmes de incêndio, pressurização de escadas, e sistemas de detecção de fumaça. A análise do desempenho desses componentes é fundamental para assegurar a eficácia do sistema como um todo.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        5. Como as condições operacionais dos sistemas são documentadas em um laudo técnico?
                    </h5>
                    <p>
                        As condições operacionais são documentadas detalhadamente, incluindo registros de manutenção, datas de inspeção, e resultados de testes realizados. Fotografias podem ser utilizadas para documentar visualmente o estado dos componentes e condições gerais dos sistemas.
                    </p>
                </div>
            </TextStyle>
        </>
    )
}


export default Text