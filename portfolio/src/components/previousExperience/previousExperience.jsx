// Imports 
import './previousExperience.css'
import { Chrono } from "react-chrono";
import PreWorkHeader from  "../previousExperience/Header/previousworkheader"

import {Container} from 'react-bootstrap'

// React Function

function previousWork () {
    const items = [
      {
        title: "2021",
        cardTitle: "Scrum Alliance",
        cardSubtitle:"Certified Scrum Master Certificate",
        cardDetailedText: "Completed the certified Scrum Master course and passed the exam with a 98%. I learned how to facilitate scrum to the larger team by ensuring the scrum framework is followed. Additionally, learned the scrum values and practices.",

      },
      {
        title: "2021",
        cardTitle: "University of Denver",
        cardSubtitle:"Bootcamp Certificate",
        cardDetailedText: "An intensive 24-week long boot camp dedicated to Full-Stack. Skills learned consist of HTML5, CSS, JavaScript, Bootstrap, jQuery, User-Centric Design Research, Visual Prototyping & Wireframing, User Interface Development.",
      }, 
      {
        title: "2019 - 2021",
        cardTitle: "Workforce Management Analyst",
        cardSubtitle:"ezCater",
        cardDetailedText: "Worked within the customer service organization to report real-time trends around our daily call volume, shrink and average handle time. Monitor inbound communication volumes throughout the day to maintain our high service level agreement; allocates workforce resources to maximize headcount for customer service quality. Worked with a team to forecast for future trends, hiring planning and created staffin plans for upcoming holidays. Supported implementation of process improvements and technology upgrades.",
          
      },
      {
        title: "2018 - 2019",
        cardTitle: "Customer Service Representative",
        cardSubtitle:"ezCater",
        cardDetailedText: "Problem solved in order to answer catering partner and customer inquiries and resolve any concerns.",
          
      },
      {
        title: "2014 - 2018",
        cardTitle: "Univeristy of Colorado, Boulder",
        cardSubtitle:"B.A.",
        cardDetailedText: "Graduated with a bachelor's degree in Political Science with a minor in English Literature.",
          
      },
    ];


    return (
      
       <Container>
         <div>
           <PreWorkHeader/>
         </div>
        <div>
          
        <div style={{ width: "100%", height: "100%"  }}>
        <Chrono items={items} 
        mode="VERTICAL_ALTERNATING"
        theme={{ 
            primary: "black",
            secondary: "lightgrey",
            cardBgColor: "lightgrey",
            cardForeColor: "black",
            titleColor: "black"
          }}> 
          <div className="chrono-icons">
          <img
               src="https://img.icons8.com/ios-filled/90/000000/student-female.png"
              alt="graduation cap"
            />
            <img
               src="https://img.icons8.com/ios-filled/90/000000/student-female.png"
              alt="graduation cap"
            />
            <img
             src="https://img.icons8.com/ios-filled/30/000000/briefcase.png"
              alt="breifcase"
            />
            <img
               src="https://img.icons8.com/ios-filled/30/000000/briefcase.png"
               alt="breifcase"
            />
            <img
              src="https://img.icons8.com/ios-filled/90/000000/student-female.png"
              alt="graduation cap"
            />
          </div>
          </Chrono>
      </div>
      </div>
      </Container> 


    )
}


export default previousWork
// mode= "VERTICAL_ALTERNATING"