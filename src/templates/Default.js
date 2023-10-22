import Header from "../partials/header/Header"

import Container from '@mui/material/Container'
import { styled } from '@mui/system'


const StyledContainer = styled(Container)(() => ({
    minWidth: '100%',
    height:'100vh',

}))

const Default = ({ children }) => {

    return (
        <>
            <Header />
            <StyledContainer style={{padding: '0px 0px'}}>
                {children}
            </StyledContainer>
        </>
    )
}



export default Default