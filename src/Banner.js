import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';
import { useHistory } from 'react-router-dom';
import Spinner from "./Loading";
import './Banner.css';


/* banner 안에 있는 값 */
function Banner() {
    const [movie, setMovie] = useState ([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory(); 
    const timeout = () => {
        setTimeout(() => {
          history.push('/browse');
        }, 200000);
      };

    useEffect(() => {
        timeout();
        return () => {
          // clear 해줌
          clearTimeout(timeout);
        };
      });

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

  //console.log(movie); movie 값 확인 

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
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
    <div calssName = "banner__contents">
    {loading ? <Spinner /> :  
        <h1 className= "banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
    }
        <h1 className="banner__description">
            {truncate(movie?.overview , 150)}
        </h1>
        
        <div className = "banner__buttons">
            <button className ="banner__button">▶︎ Play</button>
            <button className ="banner__button">ⓘ More Info</button>
        </div>
    </div>

    <div className = "banner--fadeBottom" />
    </header>
  );
}

export default Banner;
