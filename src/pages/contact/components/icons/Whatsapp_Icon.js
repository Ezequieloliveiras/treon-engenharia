import styled from "@emotion/styled"

import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const SocialsWhatsapp = styled('div')(() => ({
    display: 'flex',
    marginBottom: '20px'
}))

const Text = styled('h3')(() => ({
    marginTop: '14px',
    marginLeft: '5px',
    color: '#093170',
}))

const WhatsApp_Icon = () => {

    return (
        <>
            <SocialsWhatsapp>
                <WhatsAppIcon
                    style={{
                        color: '#2BB741',
                        fontSize: '50px'
                    }} />
                <Text className="whatsapp">
                    (27) 99733-7338
                </Text>
            </SocialsWhatsapp>
        </>
    )
}


export default WhatsApp_Icon