import React, {useEffect, useState} from 'react';
import axios from '../axios';
import Banner from '../Banner';
import Nav from '../Nav';
import MoreInfo from '../Modal';
import ReactPlayer from 'react-player/lazy';
import movieTrailer from 'movie-trailer';

import './MoviesScreen.css'

function MoviesScreen({title, isLargeRow}){
  const [movie, setMovie] = useState ([]);
  const [id,setId] = useState ([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
   
  const openModal = (id) => {
    setId(id - 1);
    alert(id);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() =>{
    async function fetchData(){
        const request = await axios.get('http://localhost:4000/api/movie');
        setMovie(request.data);
        return request;  
    }
    fetchData();
}, []);

console.log(movie?.idmovie);

  return (
    <div className = "moviesScreen">
    <Nav />
            <Banner />
              <h1>
                {title}
              </h1>
            <div className ="row__posters">
                {movie.map((movie) => (
                    <img
                     id = {movie?.idmovie} 
                     className = {`row__poster ${isLargeRow && "row__posterLarge"}`} 
                     src = {`${movie?.image}`} 
                     onClick = { () => openModal(movie?.idmovie) }
                     loading ="lazy"
                     alt ={movie?.title} 
                    />
                    )
                )} 
            </div>
            <div className = "banner__moreinfo">
            
            <MoreInfo open= {modalOpen} close={closeModal} header={movie[id]?.title}>
            <ReactPlayer 
              className="react-player" 
              url= {`https://www.youtube.com/watch?v=${movie[id]?.key}`} // ${Youtubekey(movie?.id)}
              width="700px" 
              height="400px" 
              muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
              playing={true} 
              loop={true} />
              <div className = "banner__moreinfo__description">
                <h1> {movie[id]?.title} </h1>
                <main> {movie[id]?.description} </main>
              </div>
              <button className = "banner__in__button"> ⓘ </button>
          </MoreInfo>
            
            </div>
    </div>
  )
}

export default MoviesScreen


