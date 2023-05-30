import React from 'react'
import Row from '../Row';
import requests from '../requests';
import Banner from '../Banner';
import Nav from '../Nav';
import './MoviesScreen.css'

const MoviesScreen = () => {
  return (
    <div className = "moviesScreen">
    <Nav />
            <Banner />
            <div className = "moviesScreen__title">
              <Row 
              title = "NETFLIX ORIGINALS" 
              fetchUrl = {requests.fetchNetflixOriginals} 
              isLargeRow = {true}
              />
              <Row title = "Trending Now" fetchUrl = {requests.fetchTrending} />
              <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
              <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies} />
              <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
              <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
              <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
              <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries} />   
            </div>
    </div>
  )
}

export default MoviesScreen


