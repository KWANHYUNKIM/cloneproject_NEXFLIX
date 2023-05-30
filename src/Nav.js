import React, { useState, useEffect  } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [show, handleShow] = useState(false); 
  const [search, setSearch] = useState(false);
  
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
            src="http://rb.gy/ulxxee"
            alt="Netflix Logo"
        />
        <div className = 'nav-item'>
          <Link to="/" className="nav-item-home">Home</Link>
          <Link to= "tvshow" className="nav-item-tvshows">Tv Shows</Link>
          <Link to="/movies" className="nav-item-movies">Movies</Link>
          <Link to="/" className="nav-item-new">New & Popular</Link>
          <Link to="/" className="nav-item-mylist">My List</Link>
          <Link to="/" className="nav-item-browse">Browse by Languages</Link>
        </div>
        
        <div class = "search-box">
          <input class = "search-txt" type= "text" name = "" placeholder='Type to search'/> 
            <a class = "search-bnt" href = "#">
            
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#f7f7f7",}} />
            </a>

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
