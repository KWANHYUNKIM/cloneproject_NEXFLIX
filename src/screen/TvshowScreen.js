import React from 'react'
import Row from '../Row';
import requests from '../requests';
import Banner from '../Banner';
import Nav from '../Nav';
import './TvshowScreen.css'

const TvshowScreen = () => {
  return (
    <div className = "tvshowScreen">
    <Nav />
            <Banner />
            <div className = "tvshowScreen__title">
              <Row 
              title = "NETFLIX ORIGINALS" 
              fetchUrl = {requests.fetchNetflixOriginals} 
              isLargeRow = {true}
              />
              <Row title = "Trending Now" fetchUrl = {requests.fetchTrending} />
              <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
              <Row title = "Action Movies" fetchUrl = {requests.fetchActionTv} />
              <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyTv} />
              <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorTv} />
              <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceTv} />
              <Row title = "Documentaries" fetchUrl = {requests.fetchTvDocumentaries} />   
            </div>
    </div>
  )
}

export default TvshowScreen


