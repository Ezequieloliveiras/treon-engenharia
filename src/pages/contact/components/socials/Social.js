import styled from "@emotion/styled"

import WhatsAppIcon from "../icons/Whatsapp_Icon"
import LinkedInicon from "../icons/Linkedin_Icon"
import EmailIcon from "../icons/Email_Icon"

const Socials = styled('div')(() => ({
    position: 'absolute',
    display: 'block',
    alignItems: 'center',
    flexDirection: 'column',
    width: 'auto',
    top: '100px',
    borderRadius: '10px',
}))

const Text = () => {

    return (
        <>
            <Socials>
                <h1
                    style={{
                        color: '#093170',
                        marginBottom: '100px',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                    Contato
                </h1>
                <WhatsAppIcon />
                <LinkedInicon />
                <EmailIcon />
            </Socials>
        </>
    )
}


export default Text