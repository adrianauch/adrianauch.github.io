//imports
import {Container,  Card, CardGroup} from 'react-bootstrap'
import {BsLinkedin,BsFillPenFill,BsFillEnvelopeFill} from 'react-icons/bs'


//react function
export const Projects = () => {



    return (
    <Container>
        <div className="header">
        <h1>Projects </h1>
        <p> Want to Learn More? <a href="/contactme" style={{color:"white"}}> Let's Talk! </a></p>
        <p>
                  <a className="link" href="https://www.linkedin.com/in/adrianauch/" target="_blank"><BsLinkedin/></a>
                  <a className="link" href="mailto:adrianauchterlonie" target="_blank"><BsFillEnvelopeFill/></a>
                  <a href="/contactme"><BsFillPenFill/></a>
        </p>
        
        </div>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
    <Card.Body>
      <Card.Title>Grip</Card.Title>
      <Card.Text>
        <p>Get A Grip On Your Next Group Trip. Web application designed to help groups plan trips. The application utilizies graphQL on the backend to keep track of all the trip data, and any updates and changes to the trip, tasks or expenses. On the frontend the application runs on react and creates a streamlined and seemless UI, to create an easy user experience. The application is currently deployed on a heroku server and is full compatible on mobile devices, so users can use the application anywhere.</p>
        <ul> 
            <li>JavaScript</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>JWT</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        <a href="https://github.com/Korbin-Sargent/vacation-planning-app" target="_blank">Repository |</a>
        <a href="https://grip-your-trip.herokuapp.com/" target="_blank"> | Deployed</a>
      </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
    <Card.Body>
      <Card.Title>Employee Management System</Card.Title>
      <Card.Text>
        <p>The application was created for users to manage their employee database. The user is able to view all departments, roles and employees and add new roles, departments and employees. The user is also able to update an employees role. The application is a commnad line application and runs in a node environment.</p>
        <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Inquierer</li>
            <li>mySQL</li>
            <li>mySQL2</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        <a href="https://github.com/adrianauch/Employee-Management-System" target="_blank"> Repository</a>
      </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1620778184222-6aee903c672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
    <Card.Body>
      <Card.Title>NFTy</Card.Title>
      <Card.Text>
        <p>NFTy was created to give creators and investors the ability to sell and buy exclusively digital objects that range from funky 3D videos to images of famous tweets and everything in between. We have created a platform that is easy to access all you need is a login to view and sell NFTs All Prices are listed in US dollars opposed to cryptocurrency, making it accessible for first time users Our application is responsive so users can buy and sell anywhere!
</p>
        <ul>
            <li>JQuery</li>
            <li>BootStrap</li>
            <li>SweetAlert</li>
            <li>Node.js</li>
            <li>Heroku</li>
            <li>Handlebars</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://github.com/HavoxPrime/NFTy" target="_blank">Repository |</a>
        <a href="https://project2-nfty.herokuapp.com/" target="_blank"> | Deployed</a>
      </small>
    </Card.Footer>
  </Card>
</CardGroup>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1608142172765-6949c94646ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
    <Card.Body>
      <Card.Title>Workout Tracker</Card.Title>
      <Card.Text>
        <p>The application was created for a user to be able to track both cardio and weight-training exercises. The user is also able to complete multiple cardio and weight-training exercises in one session. The application will total the users total workout duration, the amount excersises completed, pounds of weights lifted, the total amount of sets and total reps. Additionally, the application graph the users excersise data.</p>
        <ul>
            <li>JavaScript</li>
            <li>Express.js</li>
            <li>Nodemon</li>
            <li>Mongoose</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://github.com/adrianauch/Workout-Tracker" target="_blank">Repository |</a>
        <a href="https://polar-peak-65813.herokuapp.com/" target="_blank"> | Deployed</a>
      
      </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1512361180836-1ecddb33f2dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80" />
    <Card.Body>
      <Card.Title>Weather Dashboard</Card.Title>
      <Card.Text>
        <p>The motivation behind creating this web application is to give the user the ablility to view the weather in a certain location. Additionally, the application has the functionality to look up weather data for the current date and a glimpse of the next 5 day forcast. The application is able to pull in weather data for Humity, Wind, Temp, and the current date. The application saves search history to allow the see their recent searches. The app gathers data from an API - openweathermap.org. 

</p>
        <ul>
            <li>JQuery</li>
            <li>Open Weather API</li>
            <li>BootStrap</li>
        </ul>
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://github.com/adrianauch/WeatherDashBoard-hw" target="_blank">Repository |</a>
        <a href="https://adrianauch.github.io/WeatherDashBoard-hw/" target="_blank"> | Deployed</a>
      </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80" />
    <Card.Body>
      <Card.Title>Expense Tracker</Card.Title>
      <Card.Text>
        <p>The application was created to help users track expenses and deposits. The application contains a graph to help the users track their budget regardless if they are online or offline - the chances will uploaded to the application once the user is back online.</p>
        <ul>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>AtlasDB</li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://stark-gorge-39407.herokuapp.com/" target="_blank">Repository |</a>
        <a href="https://github.com/adrianauch/Budget-Tracker" target="_blank"> | Deployed</a>
      </small>
    </Card.Footer>
  </Card>
</CardGroup>

      </Container>
    )

}



export default Projects
