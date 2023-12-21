import styled from "@emotion/styled"

const TextStyle = styled('div')(() => ({
    height: '400px',
    left: '50px',
    marginTop: '50px',
    borderRadius: '10px',
}))

const Text = () => {

    return (
        <>
            <TextStyle>
                <h1
                    style={{
                        color: '#093170',
                        marginBottom: '50px',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                    Projetos de SPDA
                </h1>
                <div style={{
                    color: '#093170',
                    textAlign: 'justify',
                    width: '900px'
                }}>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        1. Por que é fundamental implementar um Projeto de Sistema de Proteção contra Descargas Atmosféricas (SPDA) em edificações?
                    </h5>
                    <p>
                        A implementação do SPDA é crucial para proteger edificações contra danos causados por descargas atmosféricas, garantindo a segurança de pessoas, equipamentos e estruturas ao direcionar a energia para o solo de forma controlada.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        2. Qual é o papel do Projeto SPDA na prevenção de incêndios causados por raios?
                    </h5>
                    <p>
                        O Projeto SPDA desvia a energia dos raios de maneira segura para o solo, reduzindo o risco de incêndios e protegendo a estrutura da edificação contra danos severos que poderiam ocorrer em caso de uma descarga atmosférica.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        3. Como o Projeto SPDA contribui para a segurança das instalações elétricas durante tempestades elétricas?
                    </h5>
                    <p>
                        O Projeto SPDA protege as instalações elétricas ao oferecer um caminho de menor resistência para a eletricidade atmosférica, minimizando a probabilidade de danos aos sistemas elétricos e eletrônicos durante tempestades elétricas.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        4. Por que a elaboração de um Projeto SPDA personalizado é importante para cada edificação?
                    </h5>
                    <p>
                        Cada edificação possui características únicas, como altura, tamanho e conteúdo, o que influencia a exposição ao risco de descargas atmosféricas. Um Projeto SPDA personalizado leva em consideração essas variáveis, garantindo uma proteção eficaz e adequada.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        5. Como a inexistência de um Projeto SPDA pode impactar a conformidade legal e a segurança das edificações?
                    </h5>
                    <p>
                        A ausência de um Projeto SPDA pode resultar em não conformidade com regulamentações locais e nacionais de segurança, além de expor a edificação a riscos significativos de danos estruturais e elétricos em caso de raios, comprometendo a segurança dos ocupantes.
                    </p>
                </div>
            </TextStyle>
        </>
    )
}


export default Text