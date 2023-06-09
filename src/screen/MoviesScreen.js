import React, {useEffect, useState} from 'react';
import axios from '../axios';
import Banner from '../Banner';
import Nav from '../Nav';
import MoreInfo from '../Modal';
import ReactPlayer from 'react-player/lazy';

import './MoviesScreen.css'

function MoviesScreen({title, isLargeRow}){
  const [movie, setMovie] = useState ([]);
  const [id,setId] = useState ([]);
  const [modalOpen, setModalOpen] = useState(false);
 
  const openModal = (id) => {
    setId(id - 1);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  let isFirstImage = true;

  const eventClick = () => {
    if(isFirstImage) { 
      document.getElementById("click_img").src = "https://emojigraph.org/media/google/star_2b50.png";
    }
    else{
    document.getElementById("click_img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsCYoBb7b8xbEUDc1Bd6R5rDGJr3F-6ZBBw&usqp=CAU"
    }
    isFirstImage = !isFirstImage;
  };
  
  useEffect(() =>{
    async function fetchData(){
        const request = await axios.get('http://localhost:4000/api/movie');
        setMovie(request.data);
        return request;  
    }
    fetchData();
}, []);
  
  return (
    <div className = "moviesScreen">
    <Nav />
            <Banner />
              <h1>
                {movie?.title}
              </h1>
            <div className = "movieScreen__posters">
                {movie.map((movie) => (
                    <img  
                     id = {movie?.idmovie} 
                     className = {`movieScreen__posters ${isLargeRow && "row__posterLarge"}`} 
                     src = {`${movie?.image}`} 
                     onClick = { () => openModal(movie?.idmovie) }
                     loading ="lazy"
                     alt ={movie?.title} 
                    />
                    )
                )} 
            </div>
            <div className = "movieScreen__moreinfo">
            
            <MoreInfo open= {modalOpen} close={closeModal} header={movie[id]?.title}>
            <ReactPlayer 
              className="movieScreen__react-player" 
              url= {`https://www.youtube.com/watch?v=${movie[id]?.key}`} // ${Youtubekey(movie?.id)}
              width="700px" 
              height="400px" 
              muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
              playing={true} 
              loop={true} />
              <div className = "movieScreen__moreinfo__description">
                <h1> {movie[id]?.title}, {movie[id]?.date} </h1>
                <h2> {movie[id]?.description} </h2>
              </div>

              <img className='movieScreen__image__bookmark' 
                   id = "click_img"
                   src= 'https://emojigraph.org/media/google/star_2b50.png'
                   onClick = {eventClick}
                   alt = ""
                   /> 
              
              <button className = "movieScreen__button__detail" id = "myButton">
              ▶︎ detail
              </button>
                  
          </MoreInfo>
            
            </div>
    </div>
  )
}


export default MoviesScreen


