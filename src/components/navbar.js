import React, {useState,} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse }  from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"




const Navbar = () => {
//ref for scrolling


  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  //toggle burger menu change
  const updateMenu = () => {
    
    if(!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }


    return (
        <div className="navbar">
          <nav className='main-nav'>
          <div className="home-button"><a href="/Portfolio/#landing"><FontAwesomeIcon 
        icon={faHouse} 
        color="rgb(212, 158, 19)"
        size="2x"
        /></a>
        </div>
        <div className="nav-logo"></div>
        <div className="navbar-links">
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ericksaputo/"><FontAwesomeIcon icon={faLinkedin} 
            color="rgb(212, 158, 19)" size="2x" /></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/ErickSaputo"><FontAwesomeIcon icon={faGithub} color="rgb(212, 158, 19)"  size="2x" /></a></li>
            <li><div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
            </div></li>
          </ul>
        </div>

          </nav>
          <div className={menu_class}>
          <div className="landing-links">
            <ul>
            <li><a href="/Portfolio/#about" onClick={updateMenu}>About</a></li>
            <li><a href="/Portfolio/#projects" onClick={updateMenu}>Projects</a></li>
            <li><a href="/Portfolio/#contact-me" onClick={updateMenu}>Contact Me</a></li>
           </ul> 
        </div>
          </div>
    </div>
    )
}

export default Navbar;