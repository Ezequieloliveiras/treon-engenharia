import { styled } from "@mui/material"

const StyledSection = styled('section')(() => ({
    position: 'relative',
    minHeight: '800px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: 'url(https://static.wixstatic.com/media/b65cfd_12fbe66f7a584cb3bf2d56f03fcf8378~mv2.jpg/v1/fill/w_988,h_684,al_c,q_85,enc_auto/b65cfd_12fbe66f7a584cb3bf2d56f03fcf8378~mv2.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}))

const ContentSectionOne = () => {

    return (
        <>
          

            <StyledSection >
                <h1 style={{ fontSize: '62px', color: '#093170',position: 'absolute', top: '300px'}}>NOSSOS SERVIÇOS DE ENGENHARIA</h1>
            </StyledSection>
            
        </>
    )
}


export default ContentSectionOne

