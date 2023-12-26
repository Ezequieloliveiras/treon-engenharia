import styled from "@emotion/styled"

const TextStyle = styled('div')(() => ({
    height: '400px',
    left: '50px',
    marginTop: '30px',
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
                    Projetos de energia solar
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
                        1. Por que é tão relevante investir em um projeto fotovoltaico para a geração de energia elétrica?
                    </h5>
                    <p>
                        Um projeto fotovoltaico é essencial para aproveitar uma fonte de energia renovável e sustentável, reduzindo a dependência de fontes não renováveis e contribuindo para a mitigação das mudanças climáticas.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        2. Quais são as vantagens econômicas associadas à implementação de um projeto fotovoltaico?
                    </h5>
                    <p>
                        A instalação de um sistema fotovoltaico pode resultar em economias significativas a longo prazo, pois reduz os custos com a conta de energia elétrica, além de permitir a venda do excedente de energia de volta à rede, gerando retorno financeiro para o proprietário.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        3. Como um projeto fotovoltaico contribui para a independência energética de uma edificação ou empresa?
                    </h5>
                    <p>
                        Ao gerar sua própria eletricidade a partir da luz solar, uma edificação ou empresa torna-se menos dependente da rede elétrica convencional, proporcionando maior autonomia e segurança no fornecimento de energia.
                    </p>
                    <h5
                        tyle={{
                            fontWeight: 'bold'
                        }}>
                        4. Quais são os benefícios ambientais associados à implementação de projetos fotovoltaicos?
                    </h5>
                    <p>
                        Projetos fotovoltaicos ajudam a reduzir as emissões de gases de efeito estufa, promovendo uma matriz energética mais limpa. Além disso, a geração de eletricidade por meio da luz solar não gera poluentes atmosféricos, contribuindo para a preservação do meio ambiente.
                    </p>
                    <h5
                        style={{
                            fontWeight: 'bold'
                        }}>
                        5. Como a valorização imobiliária pode ser influenciada pela presença de um sistema fotovoltaico em uma propriedade?
                    </h5>
                    <p>
                        A instalação de um projeto fotovoltaico agrega valor a uma propriedade, uma vez que compradores e locatários valorizam a eficiência energética e os benefícios econômicos associados à geração própria de energia, tornando a propriedade mais atrativa no mercado imobiliário.
                    </p>
                </div>
            </TextStyle>
        </>
    )
}


export default Text