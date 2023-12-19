import styled from "@emotion/styled"

const TextStyle = styled('div')(() => ({
    marginTop: '50px',
    height: '400px',
    left: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}))

const Text = () => {

    return (
        <>
            <TextStyle>
                <h1 style={{ color: '#093170', marginBottom: '50px', textAlign: 'center', fontWeight: 'bold' }}>
                    Projetos Elétricos
                </h1>
                <div style={{ color: '#093170', textAlign: 'justify', width: '900px' }}>
                    <h5 style={{ fontWeight: 'bold' }}>
                        1.  Por que é crucial desenvolver um projeto elétrico antes de iniciar qualquer instalação elétrica?
                    </h5>
                    <p>
                        O projeto elétrico é crucial porque oferece um plano detalhado, determinando a distribuição eficiente de circuitos, a escolha adequada de equipamentos e garantindo que todas as normas de segurança e regulamentações sejam atendidas.

                    </p>

                    <h5 style={{ fontWeight: 'bold' }}>
                        2. Qual é a importância da segurança ao considerar um projeto elétrico?
                    </h5>
                    <p>
                        A segurança é fundamental no projeto elétrico, pois este identifica e mitiga potenciais riscos, como curtos-circuitos e falhas elétricas, assegurando um ambiente livre de perigos elétricos para os ocupantes da edificação.
                    </p>

                    <h5 style={{ fontWeight: 'bold' }}>
                        3. Como um projeto elétrico contribui para a eficiência energética de uma construção?
                    </h5>
                    <p>
                        Um projeto elétrico bem elaborado permite a seleção de tecnologias e equipamentos eficientes, otimizando o consumo de energia e contribuindo para a redução de custos operacionais ao longo do tempo.

                    </p>

                    <h5 style={{ fontWeight: 'bold' }}>
                        4. Por que seguir normas e regulamentações é crucial no desenvolvimento de um projeto elétrico?
                    </h5>
                    <p>
                        A conformidade com normas e regulamentações é vital para garantir a segurança e a interoperabilidade do sistema elétrico, além de facilitar a aprovação do projeto pela concessionária de energia e evitar problemas legais futuros.
                    </p>
                    <h5 style={{ fontWeight: 'bold' }}>
                        5. Como um projeto elétrico bem planejado pode facilitar a manutenção futura das instalações?
                    </h5>
                    <p>
                        Um projeto elétrico detalhado fornece informações essenciais sobre a localização de componentes, facilitando a identificação e correção de problemas durante a manutenção. Isso reduz o tempo de inatividade e os custos associados à manutenção corretiva.
                    </p>

                </div>
            </TextStyle>
        </>
    )
}


export default Text