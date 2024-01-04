import styled from "@emotion/styled"

const TextStyle = styled('div')(() => ({
    height: '100%',
    marginTop: '30px',
    borderRadius: '10px',
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
                    Por que preciso do PMOC?
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
                        1. Por que é necessário ter um PMOC em um edifício?
                    </h5 >
                    <p>
                        O PMOC é essencial para garantir a qualidade do ar interno e o bom funcionamento dos sistemas de climatização. Ele ajuda a prevenir riscos à saúde, assegurando a manutenção adequada dos equipamentos e a conformidade com normas regulatórias.
                    </p>
                    <h5 style={{
                        fontWeight: 'bold'
                    }}>
                        2. Como o PMOC contribui para a saúde e bem-estar dos ocupantes?
                    </h5>
                    <p>
                        O PMOC inclui ações preventivas que visam controlar e minimizar a proliferação de agentes nocivos, como ácaros e fungos, no sistema de ar-condicionado. Isso promove um ambiente mais saudável, reduzindo alergias e problemas respiratórios.
                    </p>
                    <h5 style={{
                        fontWeight: 'bold'
                    }}>
                        3. Qual o impacto da falta de um PMOC na eficiência energética?
                    </h5>
                    <p>
                        A ausência do PMOC pode levar a falhas nos equipamentos, resultando em desperdício de energia. Com um plano adequado, é possível otimizar o desempenho dos sistemas, reduzindo custos operacionais e promovendo a sustentabilidade.
                    </p>
                    <h5 style={{
                        fontWeight: 'bold',
                        wordSpacing: '-0.7px'
                    }}>
                        4. Por que devo solicitar o PMOC imediatamente após a instalação do sistema de climatização?
                    </h5>
                    <p>
                        A solicitação imediata do PMOC é crucial para assegurar que o sistema esteja operando conforme o projetado desde o início. Isso previne desgastes prematuros, aumenta a vida útil dos equipamentos e evita custos adicionais com reparos desnecessários.
                    </p>
                    <h5 style={{
                        fontWeight: 'bold'
                    }}>
                        5. Como o PMOC impacta na conformidade com normas e regulamentações?
                    </h5>
                    <p>
                        O PMOC é requisito legal em muitas jurisdições. Adotar o plano de forma imediata garante que o edifício esteja em conformidade com as normas vigentes, evitando multas e problemas legais associados à falta de documentação adequada.
                    </p>
                    <h5 style={{
                        fontWeight: 'bold'
                    }}>
                        6. Em que medida o PMOC contribui para a segurança operacional?
                    </h5>
                    <p>
                        O PMOC estabelece procedimentos de segurança e manutenção preventiva, reduzindo o risco de falhas críticas nos sistemas de climatização. Isso promove um ambiente mais seguro para ocupantes e evita situações de emergência.
                    </p>
                    <p>
                        Ao adotar prontamente o PMOC, você não apenas atende às exigências regulatórias, mas também promove um ambiente saudável, eficiente e seguro para todos que frequentam o edifício.
                    </p>
                </div>
            </TextStyle>
        </>
    )
}


export default Text