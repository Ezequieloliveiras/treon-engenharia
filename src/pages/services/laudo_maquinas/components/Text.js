import styled from "@emotion/styled"

const TextStyle = styled('div')(() => ({
    height: '400px',
    marginTop: '50px',
    left: '50px',
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
                    Laudo técnico de máquinas pesadas
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
                        1.  Qual é o propósito principal de um laudo técnico em máquinas e equipamentos?
                    </h5>
                    <p>
                        O propósito principal de um laudo técnico em máquinas e equipamentos é realizar uma análise detalhada para avaliar o estado, desempenho, segurança e conformidade de máquinas e equipamentos, identificando possíveis problemas, sugerindo correções e fornecendo recomendações para manutenção adequada.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        2. Quais são os elementos fundamentais que devem ser incluídos em um laudo técnico de máquinas e equipamentos?
                    </h5>
                    <p>
                        Um laudo técnico de máquinas e equipamentos deve incluir a identificação do cliente, descrição detalhada dos equipamentos, condições de funcionamento, análise de segurança, eventuais avarias, recomendações para reparos, e, quando aplicável, informações sobre conformidade com normas e regulamentações.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        3. Como a análise de segurança é abordada em um laudo técnico de máquinas e equipamentos?
                    </h5>
                    <p>
                        A análise de segurança em um laudo técnico de máquinas e equipamentos aborda aspectos como a presença e funcionalidade de dispositivos de segurança, condições de operação segura, identificação de riscos potenciais e sugestões para aprimorar a segurança operacional.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        4. Quais são os métodos comuns utilizados para identificar a conformidade de máquinas e equipamentos com normas e regulamentações?
                    </h5>
                    <p>
                        Os métodos comuns para identificar a conformidade incluem a comparação das especificações do fabricante com as normas aplicáveis, a verificação da presença de marcações de conformidade, e a análise de registros de manutenção e inspeção anteriores.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        5.  Como as avarias em máquinas e equipamentos são documentadas em um laudo técnico?
                    </h5>
                    <p>
                        As avarias em máquinas e equipamentos são documentadas de forma detalhada, descrevendo a natureza e a extensão dos danos. Fotografias e medições podem ser incluídas para oferecer uma visão mais completa das condições identificadas.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        6.  Qual é a importância das recomendações para reparos em um laudo técnico?
                    </h5>
                    <p>
                        As recomendações para reparos são fundamentais, pois fornecem orientações claras sobre as ações corretivas necessárias para restaurar a funcionalidade, segurança e eficiência dos equipamentos. Isso ajuda na prevenção de falhas e na manutenção preventiva adequada.
                    </p>
                </div>
            </TextStyle>
        </>
    )
}


export default Text