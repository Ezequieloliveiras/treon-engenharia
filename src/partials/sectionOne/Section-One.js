import { styled } from '@mui/system'


const StyledSectionOne = styled('section')(() => ({
    minWidth: '100%',
    height:'100vh',
    backgroundSize:'cover',  
    backgroundRepeat:'no-repeat',
    backgroundImage:'url(https://static.wixstatic.com/media/b65cfd_12fbe66f7a584cb3bf2d56f03fcf8378~mv2.jpg/v1/fill/w_988,h_684,al_c,q_85,enc_auto/b65cfd_12fbe66f7a584cb3bf2d56f03fcf8378~mv2.jpg)',
}))

const SectionOne = ({ children }) => {

    return (
        <>
        <StyledSectionOne>
            {children}
        </StyledSectionOne>
          
        </>
    )
}

export default SectionOne