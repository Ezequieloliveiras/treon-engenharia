import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'

import imagem5 from './imageCarousel/5.png'
import imagem4 from './imageCarousel/4.webp'
import imagem3 from './imageCarousel/3.jpg'

function DarkVariantExample() {
    return (
        <Carousel style={{ height: '100vh' }}>
            <Carousel.Item style={{
                position: 'relative',
                width: '100%',
            }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}>
                    <img
                        className="d-block w-100"
                        src={imagem4}
                        alt="First slide"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100vh',
                            filter: 'blur(1px)'
                        }}
                    />
                </div>
                <Carousel.Caption style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '-20px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                }}>
                    <h1 style={{
                        fontSize: '60px',
                        fontWeight: 'bold',
                    }}>PROJETOS FOTOVOLTAICOS</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{
                position: 'relative',
                width: '100%',
            }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}>
                    <img
                        className="d-block w-100"
                        src={imagem5}
                        alt="First slide"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            filter: 'blur(1px)'
                        }}
                    />
                </div>
                <Carousel.Caption style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '-100px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                }}>
                    <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>SPDA</h1>
                    <h6 style={{
                        letterSpacing: '2px',
                        fontWeight: 'bold',
                    }}>SISTEMA DE PREVENÇÃO CONTRA DESCARGA ATMOSFÉRICA</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{
                position: 'relative',
                width: '100%',
            }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}>
                    <img
                        className="d-block w-100"
                        src={imagem3}
                        alt="First slide"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            filter: 'blur(1px)'
                        }}
                    />
                </div>
                <Carousel.Caption style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '-120px',
                    color: '#093170',
                }}>
                    <h1 style={{
                        fontSize: '60px',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)',
                    }}>SISTEMA DE DETCÇÃO DE INCÊNDIO</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default DarkVariantExample