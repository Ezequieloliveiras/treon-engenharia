import styled from "@emotion/styled"

import EmailIcon from '@mui/icons-material/Email'

import '../../../general_pages.css'

const Email = styled('div')(() => ({
    display: 'flex',
    marginBottom: '20px'
}))

const Text = styled('h3')(() => ({
    marginTop: '14px',
    marginLeft: '5px',
    color: '#093170',
}))

const Email_icon = () => {

    return (
        <>
            <Email>
                <EmailIcon
                    style={{
                        color: '#093170',
                        fontSize: '50px'
                    }} />
                <Text className="email">
                    contato@treonengenharia.com.br
                </Text>
            </Email>
        </>
    )
}


export default Email_icon