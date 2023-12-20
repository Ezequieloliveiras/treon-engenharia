import styled from "@emotion/styled"

import WhatsAppIcon from "../icons/Whatsapp_Icon"
import LinkedInicon from "../icons/Linkedin_Icon"
import EmailIcon from "../icons/Email_Icon"

const Socials = styled('div')(() => ({

    display: 'block',
    marginBottom: '80px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 'auto',
    borderRadius: '10px',
}))

const Text = () => {

    return (
        <>
            <h1
                style={{
                    color: '#093170',
                    top: '80px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    position: 'absolute',
                    margin: '0px'
                }}>
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