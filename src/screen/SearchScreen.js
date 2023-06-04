import React, { useEffect, useState } from 'react'
import axios from '../axios';
import "./SearchScreen.css";
import MoreInfo from "../Modal";
import ReactPlayer from 'react-player/lazy';
import requests from '../requests'

function SearchInput (props)
    {
    console.log("props 값은? " + props);
    const [search, setSearch] = useState(''); // input
    //const [lists, setLists] = useState(false); // list modal
    //const [movieLists, setMovieLists] = useState([]);
    
    const API_KEY = requests.API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${props}&language=ko-KR`;
    
    const [modalOpen, setModalOpen] = useState(false);
   
    const closeModal = () => {
      setModalOpen(false);
    };
    
     // A snippet of code which rans based on a speicific condition/variable
     useEffect(() => {
        // if [], run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(url);
            setSearch(request.data.results);
            return request;
        }
        fetchData();
    }, [url]);
    

    return (
        <div className="searchContainer">
           
          <MoreInfo open={true} close={closeModal} header={search?.name}>
           
          </MoreInfo>
        </div>

    )
}
export default SearchInput

