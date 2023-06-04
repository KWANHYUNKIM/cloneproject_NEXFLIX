import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';

import './Tvshowbanners.css';


/* banner 안에 있는 값 */
function Tvshowbanners() {
    const [movie, setMovie] = useState ([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
   
    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

  useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return request;  
        }

        fetchData();
        setLoading(false);
  }, []);

  return (
    <header className= "banner"
        style= {{
            backgroundSize: "cover",
            backgroundImage: `url(
                "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
        > 
        </header>
  );
}



export default Tvshowbanners;