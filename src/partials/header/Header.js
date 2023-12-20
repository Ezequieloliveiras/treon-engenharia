import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './index2.css';
import LogoTreon from '../logo/logo_treon_3.png';
import CreaLogo from '../logo/crea_logo.png';

function BasicExample() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#093170', position:'relative' }}>
      <Container id='contend' className="d-flex justify-content-center align-items-center" >
        <img src={LogoTreon} style={{ width: '10%', marginRight: '50px' }} alt="LogoTreon" />
        <img src={CreaLogo} style={{ width: '3%', marginRight: '50px' }} alt="CreaLogo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ alignContent:'center', justifyContent:'center'}}>
          <Nav className="me-auto" style={{margin:'0 auto'}}>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
