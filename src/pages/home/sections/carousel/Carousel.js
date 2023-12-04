import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem4 from './imageCarousel/4.jpg';
import imagem3 from './imageCarousel/3.webp';


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
                    src={imagem4}
                    alt="First slide"
                    style={{ opacity: 0.9 }}
                />
                <Carousel.Caption style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '10px'
                }}>
                    <h1 style={{ color: '#093170', fontWeight: 'bold', fontSize: '60px' }}> Elétrica</h1>
                    <p style={{ color: '#093170' }}>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                        opacity: 0.9
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
                    <h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: '60px' }}> Sinalizador de Incêndio</h1>
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
                    <h1 style={{ color: '#093170', fontWeight: 'bold', fontSize: '60px' }}> Elétrica</h1>
                    <p style={{ color: '#093170' }}>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;