import { styled } from '@mui/material'

import '../section_four.css'

const StyledContainerFour = styled('section')(() => ({
    position: 'relative',
    display: 'flex',
    height: '950px',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'space-around',
    background: '#f5f5f5',
}))

const ContentSectionFour = ({children}) => {

    return (
        <>
            <StyledContainerFour className="section-four" >
                {children}
            </StyledContainerFour>
        </>
    )
}

export default ContentSectionFour