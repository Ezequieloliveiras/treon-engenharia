import { styled } from '@mui/system'

import Header from "../partials/header/Header"
import Footer from '../partials/footer/Footer'

const StyledContainer = styled('div')(() => ({
  width: 'auto',
  height: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}))

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContainer>
        {children}
      </StyledContainer>
      <Footer />
    </>
  )
}

export default Default
