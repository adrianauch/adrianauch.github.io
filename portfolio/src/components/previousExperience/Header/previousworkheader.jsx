import "./previousworkheader.css"
import {BsLinkedin,BsFillFileEarmarkTextFill} from 'react-icons/bs'


function previousWorkHeader () {

    return (
        <div className="header">
        <h1>Previous Work History </h1>
        <p> Want to Learn More? Please vist my LinkedIn or download my resume below.</p>
        <p>
            <a className="link1" href="https://www.linkedin.com/in/adrianauch/" target="_blank"><BsLinkedin/></a>
            <a className="link1" href="https://www.linkedin.com/in/adrianauch/" target="_blank"><BsFillFileEarmarkTextFill/></a>
        </p>
        

        </div>
    )
}

export default previousWorkHeader