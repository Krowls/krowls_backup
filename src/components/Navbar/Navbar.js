import React, { useState } from 'react'
import logo from '../../Assets/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [showdropdown,setShowdropdown] = useState(false);
    return(
        <div className='navbar-main'>
            <div className='logo'><img src={logo} alt='Logo'/></div>
            <ul className='nav-tag-group'>
                <li>Home</li>
                <li>Services
                <FontAwesomeIcon
            icon={faCaretDown}
            onClick={() => setShowdropdown(!showdropdown)}
            style={{ cursor: "pointer" }} />
                 {showdropdown && (
                    <ul className='dropdown-list'>
                         <li>Dropdown 1</li>
                         <li>Dropdown 2</li>
                         <li>Dropdown 2</li>
                    </ul>
                   
                 )}
                </li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>            
        </div>
    )
  
}

export default Navbar