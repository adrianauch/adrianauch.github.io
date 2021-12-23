//import 
import {Container, Navbar, Nav } from 'react-bootstrap'
//react icons
import {BsLinkedin,BsGithub,BsFillFileEarmarkTextFill,BsFillEnvelopeFill} from 'react-icons/bs'



function footer() {
  

  return (
    
    <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center" >
    <Container>
    <Nav className="m-auto">
      <Nav.Link target="_blank" href="https://www.linkedin.com/in/adrianauch/">
        <BsLinkedin/>
      </Nav.Link>
      <Nav.Link href="https://github.com/adrianauch" target="_blank">
        <BsGithub/>
      </Nav.Link>
      <Navbar.Brand href="/">Adrian Auchterlonie</Navbar.Brand>

      <Nav.Link href="mailto:adrian.auch11@gmail.com">
        <BsFillEnvelopeFill/>
      </Nav.Link>
      <Nav.Link href="#resume">
        <BsFillFileEarmarkTextFill/>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
  );
}

export default footer
