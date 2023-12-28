import styled from "@emotion/styled"
import EmailIcon from '@mui/icons-material/Email'
import '../../../general_pages.css'


const Email = styled('div')(() => ({
    display: 'flex',
    marginBottom: '20px'
}))

const H1 = styled('h3')(() => ({
    color: '#093170',
    marginTop: '14px',
    marginLeft: '5px'
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
                <H1 className="email">
                    contato@treonengenharia.com.br
                </H1>
            </Email>
        </>
    )
}


export default Email_icon