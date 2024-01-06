import styled from "@emotion/styled"

const TitleLaudoTec = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '70px',
    padding: '0px'
}))

function TitleLaudo() {
    return (
        <TitleLaudoTec className="divtitle"
            style={{

            }}>
            <h1 className="title"
                style={{
                    color: '#093170',
                    fontWeight: '700'
                }}>Laudos Técnicos</h1>
        </TitleLaudoTec>
    )
}

export default TitleLaudo