import { styled } from "@mui/material"
import Carousel from '../../../partials/carousel/Carousel'

const StyledSection = styled('section')(() => ({
    position: 'relative',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}))

const ContentSectionOne = () => {

    return (
        <>
            <StyledSection >
                <Carousel />
            </StyledSection>
        </>
    )
}


export default ContentSectionOne

