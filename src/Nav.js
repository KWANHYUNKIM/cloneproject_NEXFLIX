import React, { useState, useEffect  } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false); 
  const history = useHistory();
  useEffect(() =>{
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll",null);
    };
  }, []);  
   
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            onClick={() =>history.push("/")}
            className ="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
        />

        <img
            onClick={() =>history.push("/profile")}
            className ="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Logo"
        />
    
    </div>
  )
}

export default Nav
