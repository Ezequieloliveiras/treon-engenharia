import styled from "@emotion/styled"


const DivMechanicalTitle = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '70px',
    padding: '0px'
}))


function MechanicalTitle() {
    return (
        <DivMechanicalTitle className="divtitle">
            <h1 className="title"
                style={{
                    color: '#093170',
                    fontWeight: '700'
                }}>Engenharia Mecânica
            </h1>
        </DivMechanicalTitle>
    )
}


export default MechanicalTitle