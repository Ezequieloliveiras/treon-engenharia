import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'

import './carousel.css'

import Spda from './imageCarousel/spda.png'
import PainelSolar from './imageCarousel/painel_solar.jpg'
import DeteccaoIncendio from './imageCarousel/deteccao_incendio.jpg'

function DarkVariantExample() {
    return (
        <Carousel className='carousel'
            style={{
                height: '100vh',
            }}>
            <Carousel.Item>
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    }}>
                    <img
                        src={PainelSolar}
                        alt="First slide"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            filter: 'blur(2px)'
                        }}
                    />
                </div>
                <Carousel.Caption className='carousel_caption_First'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '-50px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        color: '#ffffff',
                    }}>
                    <h1 className='h1First_slide'
                        style={{
                            fontSize: '60px',
                            fontWeight: 'bold',
                        }}>
                        PROJETOS FOTOVOLTAICOS
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                    position: 'relative',
                    width: '100%',
                }}>
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }}>
                    <img
                        className="d-block w-100"
                        src={Spda}
                        alt="First slide"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            filter: 'blur(2px)'
                        }}
                    />
                </div>
                <Carousel.Caption className='carousel_caption_second'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '-100px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        color: '#ffffff',
                    }}>
                    <h1 className='h1Second_slide'
                        style={{
                            fontSize: '60px',
                            fontWeight: 'bold'
                        }}>
                        SPDA
                    </h1>
                    <p className='pSecond_slide'
                        style={{
                            letterSpacing: '2px',
                            fontWeight: 'bold',
                        }}>
                        SISTEMA DE PROTEÇÃO CONTRA DESCARGA ATMOSFÉRICA
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                    position: 'relative',
                    width: '100%',
                }}>
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }}>
                    <img
                        className="d-block w-100"
                        src={DeteccaoIncendio}
                        alt="First slide"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            filter: 'blur(2px)'
                        }}
                    />
                </div>
                <Carousel.Caption className='carousel_caption_third'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '-30px',
                        color: '#093170',
                    }}>
                    <h1 className='h1Third_slide'
                        style={{
                            fontSize: '60px',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)',
                        }}>
                        SISTEMA DE DETECÇÃO DE INCÊNDIO
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default DarkVariantExample