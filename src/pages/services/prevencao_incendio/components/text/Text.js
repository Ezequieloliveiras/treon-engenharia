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
                    Projeto de Prevenção e Combate a Incêndio
                </h1>
                <div
                    style={{
                        color: '#093170',
                        textAlign: 'justify',
                        width: '900px'
                    }}>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        1. Elaboração do Projeto de Prevenção e Combate a Incêndio
                    </h5>
                    <p>
                        A Treon Engenharia, uma empresa dedicada à segurança, conta com profissionais especializados, experientes e credenciados no Corpo de Bombeiros no estado do Espírito Santo para a elaboração de projetos de prevenção e combate a incêndio. Eles são especialistas em desenvolver estratégias de detecção, prevenção, sistemas de combate, sinalização de emergência e saídas de evacuação. A conformidade com normas técnicas e regulamentos é essencial para a aprovação do projeto pelos órgãos fiscalizadores.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        2. Avaliação e Ajustes do Projeto pelos Órgãos Competentes
                    </h5>
                    <p>
                        O projeto é submetido aos órgãos responsáveis pela fiscalização, como o Corpo de Bombeiros. Esses órgãos avaliam se o projeto atende às exigências de segurança contra incêndios. Se necessário, ajustes e revisões são realizados para garantir a conformidade.
                    </p>
                    <p>
                        Quais são os passos após a elaboração do projeto de prevenção e combate a incêndio? O projeto é submetido aos órgãos fiscalizadores, como o Corpo de Bombeiros, para avaliação. Ajustes e revisões podem ser realizados para garantir a conformidade com as normas de segurança.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        3. Liberação do Alvará de Funcionamento
                    </h5>
                    <p>
                        Após a aprovação do projeto e a conclusão das vistorias, o Alvará de Funcionamento é emitido pelos órgãos competentes, como o Corpo de Bombeiros. Este documento autoriza a edificação a operar, confirmando que ela está em conformidade com as normas de segurança estabelecidas. A liberação do Alvará está diretamente relacionada à aprovação do projeto.
                    </p>
                    <p>
                        O que significa a liberação do Alvará de Funcionamento após a aprovação do projeto? A liberação do Alvará indica que a edificação está autorizada a operar, confirmando que atende às normas de segurança contra incêndios estabelecidas pelos órgãos competentes.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        4. Renovação Periódica do Alvará de Funcionamento
                    </h5>
                    <p>
                        A liberação do Alvará de Funcionamento não é um evento único. Geralmente, requer renovação periódica para garantir a manutenção contínua dos padrões de segurança. Isso reforça a responsabilidade contínua da edificação em manter os sistemas de prevenção e combate a incêndio em conformidade.
                    </p>
                    <p>
                        Por que é necessário renovar periodicamente o Alvará de Funcionamento? A renovação periódica garante a manutenção contínua dos padrões de segurança. Isso reforça a responsabilidade da edificação em manter os sistemas de prevenção e combate a incêndio em conformidade ao longo do tempo.
                    </p>
                </div>
            </TextStyle>
        </>
    )
}


export default Text