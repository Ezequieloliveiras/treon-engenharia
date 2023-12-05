import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import imagem5 from './imageCarousel/5.jpg'
import imagem4 from './imageCarousel/4.webp'
import imagem3 from './imageCarousel/3.webp'


function DarkVariantExample() {
    return (
        <Carousel height='800px'>
            <Carousel.Item style={{
                objectFit: 'cover',
                maxHeight: '800px',
                width: '100%'
            }}>
                <img
                    className="d-block w-100"
                    src={imagem5}
                    alt="First slide"
                    style={{ objectFit: 'cover',minHeight: '800px', opacity: 0.7 }}
                />
                <Carousel.Caption style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '10px'
                }}>
                    <h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: '60px' }}>SPDA</h1>
                    <p style={{ color: '#fff' }}>
                        Sistema de proteção contra descarga atmosférica.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{
                objectFit: 'cover',
                maxHeight: '800px',
                width: '100%'
            }}>
                <img
                    style={{
                        objectFit: 'cover',
                        minHeight: '800px',
                        opacity: 0.7
                    }}
                    className="d-block w-100"
                    src={imagem3}
                    alt="Second slide"
                />
                <Carousel.Caption style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '10px'
                }}>
                    <h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: '60px' }}>Sistema de detecção de Incêndio</h1>
                    <p style={{ color: '#fff' }}>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{
                objectFit: 'cover',
                maxHeight: '800px',
                width: '100%',
                position: 'relative'
            }}>
                <img
                    style={{
                        objectFit: 'cover',
                        minHeight: '800px',
                        opacity: 0.7
                    }}
                    className="d-block w-100"
                    src={imagem4}
                    alt="Third slide"
                />
                <Carousel.Caption style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '10px'
                }}>
                    <h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: '60px' }}>Projetos Fotovoltaicos</h1>
                    <p style={{ color: '#fff' }}>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default DarkVariantExample