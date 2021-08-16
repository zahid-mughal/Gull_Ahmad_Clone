import { Container, Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

import './navbar1.css'

function Navbar1(){
    return(
        <Navbar className="d-none d-lg-block d-md-block">
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="m-3">
             <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Navbar.Text  className="m-3">
              <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Navbar.Text  className="m-3">
              <a href="#login">Mark Otto</a>
            </Navbar.Text
            ><Navbar.Text  className="m-3">
              <a href="#login">Mark Otto</a>
            </Navbar.Text >
            <Navbar.Text  className="m-3">
              <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navbar1;