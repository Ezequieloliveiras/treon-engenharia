import styled from "@emotion/styled"

import LinkedInIcon from '@mui/icons-material/LinkedIn'

const SocialsLinkedin = styled('div')(() => ({
    display: 'flex',
    marginBottom: '20px'
}))

const H1 = styled('h3')(() => ({
    color: '#093170',
    marginTop: '14px',
    marginLeft: '5px'
}))

const LinkedIn_icon = () => {

    return (
        <>
            <SocialsLinkedin>
                <LinkedInIcon style={{ color: '#0e76a8', fontSize: '50px' }} />
                <H1>
                    Treon Engenharia
                </H1>
            </SocialsLinkedin>
        </>
    )
}


export default LinkedIn_icon