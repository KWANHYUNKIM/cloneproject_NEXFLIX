import "./SearchScreen.css";
import requests from '../requests'

const SearchInput = () => {

    const [search, setSearch] = useState(''); // input
    const [lists, setLists] = useState(false); // list modal
    const [movieLists, setMovieLists] = useState([]);
    
    const API_KEY = requests.API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=&include_adult=false&query=${search}&language=en-US&page=1`;

    let data = [];

    const fetch = async () => {
        const response = await axios.get(url);
        data = response.data.results || [];
        setMovieLists(data);
    }

    const onChange = (e) => {
        setSearch(e.target.value);
        fetch(setMovieLists());
        setLists(true);
    }
    
    const hideLists = () => {
        setLists(false);
        setSearch('');
    }

    return (
        <div className="searchContainer" onClick={() => hideLists()}>
            <div className="inputContainer">
                <input className="search-txt" type="text" value={search} onChange={onChange} placeholder="title"/>
                <a className="searchLogo"><FiSearch/></a>
            </div>
            <div className={"searchMovie " + (lists ? "show" : "")}>
                <div className="listContainer">
                    { movieLists && movieLists.map(movie => (
                        <List props={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchInput

