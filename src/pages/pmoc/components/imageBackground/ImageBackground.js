import styled from "@emotion/styled"

const BackgroundImage = styled('div')(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100%',
    backgroundImage: 'url(https://www.10wallpaper.com/wallpaper/1366x768/1609/Gear_art_mechanism-3D_Artwork_Vector_Wallpaper_1366x768.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: -1,
}))

export default BackgroundImage;
