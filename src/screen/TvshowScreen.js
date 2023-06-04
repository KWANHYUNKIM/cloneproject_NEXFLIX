import React from 'react'
import Row from '../Row';
import requests from '../requests';
import Nav from '../Nav';
import SearchScreen from './SearchScreen';
import './TvshowScreen.css'
import Tvshowbanner from '../Tvshowbanners';

const TvshowScreen = () => {
  
function data () {
  var anText_sub1 = document.getElementById('info').value;
  return anText_sub1;
}
  return (
    <div className = "tvshowScreen">
    <Nav />
            <Tvshowbanner />
            <div className = "tvshowScreen-description">
              <h1>Welcome. Millions of movies,<br></br> TV shows and people to discover. Explore now.</h1>
            </div>
            <div className = "tvshowScreen-search">
              <input type="text" id = "info" placeholder='영화,TV프로그램,인물 검색...'/>
              <button class= 'tvshowScreen-search-button' onClick={SearchScreen("11")} >search</button>
            </div>
            
            <div className = "tvshowScreen__title">
              <Row 
              title = "Top Rated" 
              fetchUrl = {requests.fetchTopRated} 
              isLargeRow = {true}
              />
              <Row title = "Trending Now" fetchUrl = {requests.fetchTrending} />
              <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyTv} />
              <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceTv} />
              <Row title = "Documentaries" fetchUrl = {requests.fetchTvDocumentaries} />   
            </div>
    </div>
  
  )
}


export default TvshowScreen


