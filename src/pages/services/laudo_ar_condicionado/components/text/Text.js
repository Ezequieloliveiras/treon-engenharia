import styled from "@emotion/styled"

const TextStyle = styled('div')(() => ({
    marginTop: '50px',
    height: '400px',
    left: '50px',
    borderRadius: '10px',
    display: 'flex',

    flexDirection: 'column',
    alignItems: 'center'
}))

const Text = () => {

    return (
        <>
            <TextStyle>
                <h1 style={{ color: '#093170', marginBottom: '50px', textAlign: 'center', fontWeight: 'bold' }}>
                    Importância do laudo técnico para ar-condicionado
                </h1>
                <div style={{ color: '#093170', textAlign: 'justify', width: '900px' }}>
                    <h5 style={{ fontWeight: 'bold' }}>
                        1. Por que é importante realizar um laudo técnico em um aparelho de ar condicionado?
                    </h5>
                    <p>
                        O laudo técnico em um aparelho de ar condicionado é crucial para avaliar o estado geral do equipamento, identificar problemas, e fornecer informações detalhadas sobre a eficiência e segurança do sistema. Ele auxilia na tomada de decisões para reparos, manutenção e otimização do desempenho.
                    </p>

                    <h5 style={{ fontWeight: 'bold' }}>
                        2. Quais são os aspectos que um laudo técnico de ar condicionado deve abranger?
                    </h5>
                    <p>
                        Um laudo técnico de ar condicionado deve abranger aspectos como a identificação do cliente e local da instalação, descrição detalhada do sistema (marca, modelo, capacidade), condições iniciais da inspeção visual, testes iniciais, avaliação de desempenho, manutenção recomendada, recomendações de reparos e melhorias, além de uma conclusão geral.
                    </p>

                    <h5 style={{ fontWeight: 'bold' }}>
                        3. Como as condições iniciais, como a inspeção visual, são avaliadas em um laudo técnico?
                    </h5>
                    <p>
                        As condições iniciais, como a inspeção visual, são avaliadas observando o estado geral das unidades do ar condicionado, a limpeza dos filtros, o estado das serpentinas e qualquer evidência visual de danos. Isso fornece uma base para determinar a condição inicial do sistema.
                    </p>

                    <h5 style={{ fontWeight: 'bold' }}>
                        4. Quais testes iniciais são comumente realizados durante a elaboração de um laudo técnico em um aparelho de ar condicionado?
                    </h5>
                    <p>
                        Testes iniciais podem incluir a medição da temperatura de saída do ar, a verificação do fluxo de ar e a avaliação de ruídos incomuns. Esses testes fornecem informações essenciais sobre o desempenho inicial do sistema.
                    </p>
                    <h5 style={{ fontWeight: 'bold', letterSpacing:'-0.5px',wordSpacing: '2px' }}>
                        5. Qual é a importância da avaliação de desempenho em um laudo técnico de ar condicionado?
                    </h5>
                    <p>
                        A avaliação de desempenho é crucial para determinar a eficiência energética do sistema. Isso inclui a verificação do consumo de energia, distribuição térmica e a identificação de possíveis melhorias para otimizar o desempenho do aparelho de ar condicion
                    </p>

                </div>
            </TextStyle>
        </>
    )
}


export default Text