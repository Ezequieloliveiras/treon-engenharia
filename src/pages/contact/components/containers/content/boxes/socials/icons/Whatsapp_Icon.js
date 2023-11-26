import styled from "@emotion/styled"

import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const SocialsWhatsapp = styled('div')(() => ({
    display: 'flex',
    marginBottom: '20px'
}))

const H1 = styled('h3')(() => ({
    color: '#093170',
    marginTop: '14px',
    marginLeft: '5px'
}))

const WhatsApp_Icon = () => {

    return (
        <>
            <SocialsWhatsapp>
                <WhatsAppIcon style={{ color: '#2BB741', fontSize: '50px' }} />
                <H1>
                    (27) 99733-7338
                </H1>
            </SocialsWhatsapp>
        </>
    )
}


export default WhatsApp_Icon