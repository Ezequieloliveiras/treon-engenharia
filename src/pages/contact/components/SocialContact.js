import styled from "@emotion/styled"

import WhatsAppIcon from "./icons/Whatsapp_Icon"
import LinkedInicon from "./icons/Linkedin_Icon"
import EmailIcon from "./icons/Email_Icon"

import '../../general_pages.css'

const Socials = styled('div')(() => ({
    display: 'block',
    width: 'auto',
    marginTop:'80px',
    marginBottom: '80px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '10px',
}))

const SocialContact = () => {

    return (
        <>
            <h1 className="contact"
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


export default SocialContact