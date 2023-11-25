import styled from "@emotion/styled"

const StylerFooter = styled('div')(() => ({
    width: '100%',
    backgroundColor: 'grey',
    color: 'white',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

const Footer = () => {

    return (
        <>

            <StylerFooter >
                Footer
            </StylerFooter>
        </>
    )
}

export default Footer