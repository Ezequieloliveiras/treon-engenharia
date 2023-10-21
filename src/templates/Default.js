import Header from "../partials/header/Header"

import Container from '@mui/material/Container'
import { styled } from '@mui/system'


const StyledContainer = styled(Container)(() => ({
    padding: '30px 0',
}))

const Default = ({ children }) => {

    return (
        <>
            <Header />
            <StyledContainer >
                {children}
            </StyledContainer>
        </>
    )
}



export default Default