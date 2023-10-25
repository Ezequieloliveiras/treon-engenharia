import { styled } from "@mui/material"


const StyledSection = styled('section')(() => ({
    background: 'red',
    height: '100vh'
}))




const ContentSectionTree = () => {

    return (
        <>
            <StyledSection >
                <section >
                    <div>
                        <h1>
                            BLOCO
                        </h1>
                    </div>

                </section>

            </StyledSection>

        </>
    )
}



export default ContentSectionTree