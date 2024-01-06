import { styled } from "@mui/material"

import '../section_tree.css'

const StyledSectionTree = styled('section')(() => ({
    position: 'relative',
    height: '950px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign:'left',
    background: '#eeeeee',
}))

const ContentSectionTree = ({children}) => {

    return (
        <>
            <StyledSectionTree id="section-tree">
                {children}
            </StyledSectionTree>
        </>
    )
}

export default ContentSectionTree