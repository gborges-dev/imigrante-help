import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Topbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Imigrante Help</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/forum">Fórum</Nav.Link>
            <Nav.Link href="/help">FAQ</Nav.Link>
            <Nav.Link href="/mapa">Mapa</Nav.Link>
            <NavDropdown title="Sua conta" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/signin">Registrar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;


{/* <a href="/">Início</a>
<a href="/forum">Fórum</a>
<a href="/help">Ajuda</a>
<a href="/mapa">Mapa</a>
<a href="/login">Sua conta</a> */}