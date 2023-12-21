import styled from "@emotion/styled"

import Background from "./image/backgound_gear.jpg"

const BackgroundServices = styled('div')(() => ({
    position:'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    zIndex: -1,
    opacity: 0.1,
    filter: 'blur(10px)',
}))

export default BackgroundServices
