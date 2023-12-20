import Header from "../partials/header/Header"
import Container from '@mui/material/Container'
import { styled } from '@mui/system'
import Footer from '../partials/footer/Footer'
import ButtonDialogo from "../partials/buttonDialogo/Button"

const StyledContainer = styled(Container)(() => ({
  minWidth: '100%',
  minHeight: '100%',
  position: 'relative', 
}))

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContainer style={{ padding: '0px 0px' }}>
        {children}
        <ButtonDialogo />
      </StyledContainer>
      <Footer />
    </>
  )
}

export default Default
