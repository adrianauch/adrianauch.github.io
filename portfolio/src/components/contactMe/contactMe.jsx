//Imports
import {Form, Col, Row, Button,Container} from 'react-bootstrap'
import emailjs from 'emailjs-com'


// react funtion 

export const contactMe = () => {
 
  //emailjs function
  function sendEmail(e){
    e.preventDefault()
    emailjs.sendForm('service_7ofjn2e', 'template_ap2rtdh', e.target, 'user_85n5i21qetSuWC6SMtFsl')
    .then ((res)=>{
      console.log(res)
    },
    (err)=> {
      console.log(err)
    }
    )

  }

    return (
        <Container>
        <Form onSubmit={sendEmail}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First & Last Name</Form.Label>
      <Form.Control type="input" placeholder="First & Last Name" name="name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" name="user_email" />
    </Form.Group>

    
  </Row>


  <Row className="mb-3">

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Subject</Form.Label>
      <Form.Control type="input" placeholder="Subject" name='subject' />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3}  placeholder="Message" name='message'/>
  </Form.Group>
  <Button variant="dark" type="submit" value='send' >
    Submit
  </Button>
</Form>
</Container>
    )
}

export default contactMe