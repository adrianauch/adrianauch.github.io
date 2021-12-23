// import bootstrap 
import {Container, Row, Col, Image} from 'react-bootstrap'

// import image
import myImage from "../aboutMe/Image/MyImage.jpg"

//import icons
import {BsLinkedin,BsGithub,BsFillEnvelopeFill} from 'react-icons/bs'

//import css
import '../aboutMe/aboutMe.css'



// React Function 

function aboutMe() {

    return (
        <Container>
        <Row>
          <Col sm={6}>
          <Image src={myImage} rounded />
              </Col>
          <Col sm={6}>
              <h2> Adrian Auchterlonie</h2>
              <p>I'm a full stack web developer, with a background in customer service analytics. I earned a certificate in Web Development from University of Denver and I am a certified SCRUM Master. Additionally, I have a B.A. in Political Science and English Literature from Univerity of Colorado, Boulder. I am passionate about solving complex problems and finding data backed solutions.  I live to form relationships between ideas and reality, people and products, and experiences and solutions.   </p>
              <p className="links">
                  <a className="link" target="_blank" href="https://www.linkedin.com/in/adrianauch/"><BsLinkedin/></a>
                  <a className="link" target="_blank" href="https://github.com/adrianauch"><BsGithub/></a>
                  <a className="link" target="_blank" href="mailto:adrianauchterlonie"><BsFillEnvelopeFill/></a>
              </p>
          </Col>
        </Row>
        <Row >
            <br />
        </Row>
        <Row>
            <Col sm>
                <p>Techinical Skills</p>
                <ul>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Excel</li>
                    <li>UX/UI frameworks: Bootstrap, BULMA, HandleBars </li>
                </ul>
            </Col>
            <Col sm>
            <p>Professionally</p>
                <ul>
                    <li>Team Player and Collaborator 🤝 </li>
                    <li>Organization (I love oragnizing things)🗄</li>
                    <li>Incredibly resourceful</li>
                    <li>Upbeat and Postive Attitude 🥳</li>
                    <li>Problem Solver</li>
                    <li>Strong Communication Skills 🗣</li>
                </ul>
            </Col>
            <Col sm>
            <p>Personally</p>
                <ul>
                    <li>I love to Ski 🎿</li>
                    <li>I can talk about my 🐶 for hours</li>
                    <li>Hiking 🥾</li>
                    <li>Traveling 🛩 (I have been to 30 countries)</li>
                    <li>Food 🍱 I will pretty much try anything</li>
                </ul>
            </Col>
        </Row>
      </Container>
    )
}

export default aboutMe