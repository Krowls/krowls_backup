import React from 'react'
import "./Landing.css";
import logo from '../../Assets/logo.png'
import Subscribe from '../Subscribe/Subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube,faTwitter ,faLinkedin,faDribbble,faBehance} from '@fortawesome/free-brands-svg-icons';
function Landing() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="krowls logo" />
      </div>
      <div className="main_text">
        <div className="text">
          <p>Stay Tuned</p>
          <h1>We Are Launching Soon</h1>
        </div>
      </div>
      <Subscribe />
      <div className="followuson">
        <h4>Follow us on</h4>
        <div className="icon1">
          <a href="https://www.instagram.com/krowls.design/" rel="Instagram noreferrer" target="_blank" 
            ><FontAwesomeIcon icon={faInstagram} /></a>
          <a
            href="https://www.youtube.com/channel/UCJB9EBcrdFN2SDLhQjTE6-Q"
            target="_blank" rel="noreferrer"
            ><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://www.behance.net/krowls" target="_blank" rel="noreferrer"
            ><FontAwesomeIcon icon={faBehance} /></a>
          <a href="https://dribbble.com/krowls" target="_blank" rel="noreferrer"
            ><FontAwesomeIcon icon={faDribbble} /></a>
          <a href="https://www.linkedin.com/in/krowls" target="_blank" rel="noreferrer"
            ><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://twitter.com/Krowls3" target="_blank" rel="noreferrer"
            ><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
    </div>
  )
}

export default Landing