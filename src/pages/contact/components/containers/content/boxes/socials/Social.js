import styled from "@emotion/styled"

import WhatsAppIcon from "./icons/Whatsapp_Icon"
import LinkedInicon from "./icons/Linkedin_Icon"
import EmailIcon from "./icons/Email_Icon"

const Socials = styled('div')(() => ({
    height: '400px',
    width: 'auto',
    left: '50px',
    borderRadius: '10px',
    display: 'block',
    alignItems: 'center',
    flexDirection: 'column'
}))

const Text = () => {

    return (
        <>
            <h1 style={{ color: '#093170', marginBottom: '50px', textAlign: 'center' }}>
                Contato
            </h1>
            <Socials>
                <WhatsAppIcon />
                <LinkedInicon />
                <EmailIcon />
            </Socials>
        </>
    )
}


export default Text