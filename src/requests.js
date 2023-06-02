const API_KEY = "ba3b70b130db250d4cd8ffe89c4cf7e6";

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    
    // Tvshow
    fetchTvTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionTv: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyTv: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorTv: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceTv: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchTvDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,

    // YoutubekeyData

}



export default requests;
export {API_KEY};

