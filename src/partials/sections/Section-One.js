import { Link } from "react-router-dom"
import { styled } from "@mui/material"


const StyledSection = styled('section')(() => ({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '100px',
}))

const StyledBackground = styled('div')(() => ({
    backgroundImage: 'url(https://static.wixstatic.com/media/b65cfd_12fbe66f7a584cb3bf2d56f03fcf8378~mv2.jpg/v1/fill/w_988,h_684,al_c,q_85,enc_auto/b65cfd_12fbe66f7a584cb3bf2d56f03fcf8378~mv2.jpg)',
    opacity: '50%',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
}))

const LinkWithoutUnderline = styled(Link)(({ theme }) => ({
    textDecoration: 'none', // Remove o sublinhado do link
    color: '#093170', // Define a cor do link com base no tema do Material-UI
}))

const ContentSectionOne = () => {

    return (
        <>
            <StyledBackground />
            <StyledSection >
                <h1 style={{ fontSize: '62px', color: '#093170' }}>NOSSOS SERVIÇOS DE ENGENHARIA</h1>
                <ul>
                    <li style={{ listStyle: 'none', textDecoration: 'none' }}>
                        <LinkWithoutUnderline to="/users">Usuários</LinkWithoutUnderline>
                    </li>
                </ul>
            </StyledSection>
        </>
    )
}


export default ContentSectionOne

