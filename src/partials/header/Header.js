import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation, BrowserRouter as Router } from 'react-router-dom';

import LogoTreon from '../logo/logo_treon_3.png';
import CreaLogo from '../logo/crea_logo.png';
import logoWhatsapp from '../logo/logo_whatsapp.png';
import logoInstagram from '../logo/logo_instagram.png';
import LogoLinkedin from '../logo/logo_linkedin.png';

function BasicExample() {
  const location = useLocation();
  const isPaginaInicial = location.pathname === '/';

  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        backgroundColor: '#093170',
        position: 'relative',
        minHeight: '80px',
        padding: '0px'
      }}
    >
      <Container
        id="contend"
        className="d-flex justify-content-center align-items-center"
        style={{ width: '750px', padding: '0' }}
      >
        <img
          src={LogoTreon}
          style={{
            width: '140px',
            marginRight: '40px'
          }}
          alt="LogoTreon"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50px',
            alignItems: 'center',
            marginRight: '50px'
          }}
        >
          <img
            src={CreaLogo}
            style={{
              width: '30px',
              height: '30px'
            }}
            alt="CreaLogo"
          />
          <p
            className="paragraph"
            style={{
              fontWeight: 'bold',
              width: '45px',
              fontSize: '10px',
              color: 'white',
              margin: '1px 0px 0px 0px'
            }}
          >
            CREA-ES
          </p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              margin: '0 auto',
              paddingRight: '60px'
            }}
          >
            <Nav.Link href="/" id="custom-nav-link">
              Início
            </Nav.Link>
            <Nav.Link href="/contact" id="custom-nav-link">
              Contato
            </Nav.Link>
            <Nav.Link href="/sobre" id="custom-nav-link">
              Sobre
            </Nav.Link>
            {isPaginaInicial && (
              <NavDropdown title="Serviços" id="basic-nav-dropdown">
                <NavDropdown.Item href="#section-two">
                  Engenharia Mecânica
                </NavDropdown.Item>
                <NavDropdown.Item href="#section-tree">
                  Engenharia Elétrica
                </NavDropdown.Item>
                <NavDropdown.Item href="#section-four">
                  Laudos Técnicos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <div className="socials">
            <a
              href="https://wa.me/+5527996213588"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'none',
                display: 'inline-block'
              }}
            >
              <img
                src={logoWhatsapp}
                style={{
                  width: '30px',
                  height: '30px',
                  marginRight: '10px'
                }}
                alt="logoLinkedin"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/treon-engenharia-ltda/about/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'none',
                display: 'inline-block'
              }}
            >
              <img
                src={LogoLinkedin}
                style={{
                  width: '30px',
                  height: '30px',
                  marginRight: '10px'
                }}
                alt="linkedinLogo"
              />
            </a>



            <a
              href="https://www.instagram.com/treonengenharia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'none',
                display: 'inline-block'
              }}
            >
              <img
                src={logoInstagram}
                style={{
                  width: '30px',
                  height: '30px',
                  marginRight: '10px'
                }}
                alt="linkedinLogo"
              />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* Outros componentes da sua aplicação */}
        <BasicExample />
      </div>
    </Router>
  );
}

export default App;
