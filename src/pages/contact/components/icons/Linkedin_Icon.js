import styled from "@emotion/styled"

import LinkedInIcon from '@mui/icons-material/LinkedIn'

const SocialsLinkedin = styled('div')(() => ({
    display: 'flex',
    marginBottom: '20px'
}))

const Text = styled('h3')(() => ({
    marginTop: '14px',
    marginLeft: '5px',
    color: '#093170',
}))

const LinkedIn_icon = () => {

    return (
        <>
            <SocialsLinkedin>
                <LinkedInIcon
                    style={{
                        color: '#0e76a8',
                        fontSize: '50px'
                    }} />
                <Text className="linkedin">
                    Treon Engenharia
                </Text>
            </SocialsLinkedin>
        </>
    )
}


export default LinkedIn_icon