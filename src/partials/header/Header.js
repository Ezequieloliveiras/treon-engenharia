import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './index2.css';

import LogoTreon from '../logo/logo_treon_3.png';
import CreaLogo from '../logo/crea_logo.png';
import logoWhatsapp from '../logo/logo_whatsapp.png';
import logoInstagram from '../logo/logo_instagram.png';
import LogoLinkedin from '../logo/logo_linkedin.png';

function BasicExample() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#093170', position: 'relative', minHeight: '80px' }}>
      <Container id='contend' className="d-flex justify-content-center align-items-center" >

        <img src={LogoTreon} style={{ width: '140px', marginRight: '40px' }} alt="LogoTreon" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50px',
            alignItems: 'center',
            marginRight: '50px'
          }}>
          <img src={CreaLogo}
            style={{
              width: '30px',
              height: '30px'
            }}
            alt="CreaLogo" />
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '10px',
              color: 'white',
              margin: '1px 0px 0px 0px'
            }}>CREA-ES</p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >

          <Nav className="me-auto" style={{ margin: '0 auto' }}>

            <Nav.Link href="/" id="custom-nav-link">Inicio</Nav.Link>
            <Nav.Link href="/contact" id="custom-nav-link">Contato</Nav.Link>
            <Nav.Link href="/sobre" id="custom-nav-link">Sobre</Nav.Link>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Engenharia Mecânica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Engenharia Elétrica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Laudos Técnicos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <img src={logoWhatsapp}
            style={{
              width: '30px',
              height: '30px',
              marginRight: '10px'
            }}
            alt="creaLogo" />

          <img src={LogoLinkedin}
            style={{
              width: '30px',
              height: '30px',
              marginRight: '10px'
            }}
            alt="linkedinLogo" />
          <img src={logoInstagram}
            style={{
              width: '30px',
              height: '30px'
            }}
            alt="instaLogo" />


        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default BasicExample;
