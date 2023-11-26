import styled from "@emotion/styled"
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const TextStyle = styled('div')(() => ({
    height: '400px',
    width: 'auto',
    left: '50px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}))

const Text = () => {

    return (
        <>
            <TextStyle >
                <h1 style={{ color: '#093170', marginBottom: '50px' }}>
                    CONTATO
                </h1>
                <div style={{ display: 'flex' }}>
                    <WhatsAppIcon style={{ color: 'green', fontSize: '50px' }} />
                    <h2 style={{ color: '#093170', marginTop:'9px', marginLeft:'5px' }}>
                        (27) 99733-7338
                    </h2>
                </div>
            </TextStyle>
        </>
    )
}


export default Text