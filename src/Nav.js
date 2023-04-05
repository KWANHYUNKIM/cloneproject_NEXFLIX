import React, { useState, useEffect  } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false); 
  const history = useHistory();
  useEffect(() =>{
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
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
        <div className = 'nav-item'>
          <Link to="/" className="nav-item-home">Home</Link>
          <Link to="/movies" className="nav-item-tvshows">Tv Shows</Link>
          <Link to="/movies" className="nav-item-movies">Movies</Link>
          <Link to="/movies" className="nav-item-new">New & Popular</Link>
          <Link to="/movies" className="nav-item-mylist">My List</Link>
          <Link to="/movies" className="nav-item-browse">Browse by Languages</Link>
        </div>
        <div className = 'nav__search'>
          <input type="text" placeholder= "Titles,people,genres">
          </input>
        </div>
        <div className = 'nav__notification'>
          
        </div>
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
