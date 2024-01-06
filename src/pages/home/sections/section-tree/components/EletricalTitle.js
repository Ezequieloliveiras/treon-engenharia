import styled from "@emotion/styled"

const DivEletricalTitle = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '70px'
}))

function EletricalTitle() {
    return (
        <DivEletricalTitle className="divtitle">
            <h1 className="title"
                style={{
                    color: '#093170',
                    fontWeight: '700'
                }}>Engenharia Elétrica
            </h1>
        </DivEletricalTitle>
    )
}

export default EletricalTitle