import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import imagem5 from './imageCarousel/5.png'
import imagem4 from './imageCarousel/4.webp'
import imagem3 from './imageCarousel/3.jpg'


function DarkVariantExample() {
    return (
        <Carousel>
            <Carousel.Item style={{
                position: 'relative',
                width: '100%',
                height: '800px'
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
                    top: '10px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                  
                }}>
                    <h1 style={{
                        fontSize: '80px',
                        fontWeight: 'bold',
                    }}>Projetos Fotovoltaicos</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{
                position: 'relative',
                width: '100%',
                height: '800px'
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
                    top: '10px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',

                }}>
                    <h1 style={{
                        fontSize: '80px',
                        fontWeight: 'bold',
                        letterSpacing: '2px'
                    }}>SPDA</h1>
                    <p style={{ letterSpacing: '2px' }}>Sistema de proteção contra descarga atmosférica.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{
                position: 'relative',
                height: '800px'
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

                        }}
                    />
                </div>
                <Carousel.Caption style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '10px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                }}>
                    <h1 style={{
                        fontSize: '80px',
                        fontWeight: 'bold',
                        letterSpacing: '2px'
                    }}>Sistema de detecção de incêndio</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default DarkVariantExample