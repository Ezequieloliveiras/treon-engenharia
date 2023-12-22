import Header from "../partials/header/Header"
import { styled } from '@mui/system'
import Footer from '../partials/footer/Footer'
import ButtonDialogo from "../partials/buttonDialogo/Button"

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
        <ButtonDialogo />
      </StyledContainer>
      <Footer />
    </>
  )
}

export default Default
