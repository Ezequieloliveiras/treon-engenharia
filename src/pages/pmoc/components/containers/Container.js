import styled from "@emotion/styled"

const BackgroundImage = styled('div')(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(https://www.10wallpaper.com/wallpaper/1366x768/1609/Gear_art_mechanism-3D_Artwork_Vector_Wallpaper_1366x768.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: -1,
}))

const Container = styled('div')(() => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: '1600px',
    zIndex: 1,
}))

export { BackgroundImage, Container }
