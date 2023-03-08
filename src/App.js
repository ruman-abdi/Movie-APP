
import './App.css'
import searchicon from'./search.svg';
import MovieCard from './MovieCard';
import { useEffect ,useState} from "react";


const  API= "http://www.omdbapi.com?apikey=52c62190"



function App() {
const [searchTearm, setSearchTearm] = useState('')
const [movies,setMovies] = useState([])

  const searchMovies =async(title)=>{
    const response =await fetch(`${API} &s=${title}` )
    const data = await response.json()
    setMovies(data.Search)
  
  }

  

  useEffect(()=>{
searchMovies( 'spiderman')
  }, [])
  return (
    <div className="App">
   <h1>movie land</h1>


      <div className='search'>
         <input type='text' placeholder='search movies..' value={searchTearm} 
          onChange ={(e) =>setSearchTearm(e.target.value)}
   />

   <img src={searchicon} alt="search" onClick={()=>searchMovies(searchTearm)}/>
   </div>
   
   <div className='container'>
   {movies.map((movie)=>(
    <MovieCard data={movie}/>
   ))}


   </div>
     

    </div>
  );
}

export default App;
