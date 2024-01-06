import styled from "@emotion/styled"

const StyledContainerTwo = styled('section')(() => ({
    position: 'relative',
    height: '950px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign:'left',
    background: '#f5f5f5',
}))

function ContainerTwo({children}) {
    return (
        <StyledContainerTwo id="section-two" >
           {children}
        </StyledContainerTwo>
    )
}

export default ContainerTwo

