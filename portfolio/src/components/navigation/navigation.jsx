// import - css
import React from "react";
import {  Nav, Navbar  } from 'react-bootstrap'
import {BsHouseDoor} from 'react-icons/bs'
// import router 
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
// Import other modules 
import AboutMe from '../aboutMe/aboutMe';
import ContactMe from '../contactMe/contactMe';
import PreviousWork from '../previousExperience/previousExperience';
import Projects from '../projects/project';
import Home from '../Hero/Hero'

import '../navigation/navigation.css'





// navbar code 
class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="m-auto">
              <Navbar.Brand  style={{color:"#9a9d9f"}}href="/">
                     <BsHouseDoor/>
                    </Navbar.Brand>
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto ">
                    <Nav.Link href="/aboutme">About Me</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/works">Previous Work</Nav.Link>
                    <Nav.Link href="/contactme">Contact Me</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/aboutme">
                  <AboutMe/>
                </Route>
                <Route exact path="/projects">
                  <Projects/>
                </Route>
                <Route  exact path="/works">
                  <PreviousWork />
                </Route>
                <Route exact path="/contactme">
                  <ContactMe/>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapNavbar;
