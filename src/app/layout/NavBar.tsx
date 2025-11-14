import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router';

function NavBar() {
  // false, 'sm', 'md', 'lg', 'xl', 'xxl'
  const size = 'sm';
  return (
    <>
      <Navbar key={size} expand={size} className="bg-body-tertiary mb-3" fixed='top'>
        <Container fluid>
          <Navbar.Brand as={NavLink} to='/'>JD</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${size}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${size}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${size}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${size}`}>
                JD
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                <Nav.Link as={NavLink} to='/resume'>Resume</Nav.Link>
                <NavDropdown
                  title="Projects"
                  id={`offcanvasNavbarDropdown-expand-${size}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;