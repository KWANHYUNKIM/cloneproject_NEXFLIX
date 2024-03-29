import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css";
import ReactPlayer from 'react-player/lazy'
import movieTrailer from 'movie-trailer';


const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]); /* 이 데이터를 저장 */
    const [trailerUrl, setTrailerUrl] = useState("");
    const [muted, setMuted] = useState(true);
    // A snippet of code which rans based on a speicific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    //console.log(movies[1].overview) //movies 정보 확인 할 수 있음 
    
    const handleClick = (movie) => {
        if (trailerUrl){
            console.log(movie?.name);
            setTrailerUrl("");
            
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(movie?.name);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error));
        }
    };
    //console.log(trailerUrl);
    return (
            <div className ="row">
                
            <h2>{title}</h2>
                
            <div className ="row__posters">
                {movies.map((movie) => ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                     className = {`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    key = {movie.id}
                    onClick={() => handleClick(movie)}  
                     src = {`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path 
                    }`} 
                    loading ="lazy"
                    alt ={movie.name} 
                    />
                    )
                )} 
                </div>
                    <ReactPlayer 
                        url= {`http://www.youtube.com/watch?v=${trailerUrl}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute',top: '0', left: '0'}}
                        playing
                        muted ={muted}
                    />
            </div>
                
  );
}

export default Row;
