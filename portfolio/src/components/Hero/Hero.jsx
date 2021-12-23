//imports
import "../Hero/hero.css"
import MyImage from "../Hero/bit3.png"
import {Container, Row, Col, Image} from 'react-bootstrap'
import {BsLinkedin,BsFillPenFill,BsFillEnvelopeFill} from 'react-icons/bs'


function Hero (){
    return (
      <Container className="font-link">
        <Row>
        <Col xs={6} > 
        <Image src={MyImage} fluid ></Image>
        </Col>
        
        <Col className="para">
          <div className="font-link">
         <p> Hi There! 👋 </p>
         <p>My name is Adrian Auchterlonie!</p>
          <p>I'm a Denver based Full-Stack developer with a background in customer service analytics. I have a passion for problem-solving, data and project management and I am looking to build applications with a user in mind to push businesses forward.</p>
          <p>Want to Say Hi?</p>
          <p className="links">
                  <a className="link" href="https://www.linkedin.com/in/adrianauch/" target="_blank"><BsLinkedin/></a>
                  <a className="link" href="/contactme"><BsFillPenFill/></a>
                  <a className="link" href="mailto:adrianauchterlonie" target="_blank"><BsFillEnvelopeFill/></a>
              </p>

          </div>
          
          </Col>
        </Row>
        
       
      



      </Container>
    )
}








export default Hero